const { generateFileList } = require('./src/crawler')
const { join } = require('path')
const fs = require('fs')
const parseMD = require('parse-md').default

function getPageMd (id) {
  const data = parseMD(fs.readFileSync(join('content', 'pages', id + '.md'), 'utf-8'))
  return data
}


module.exports = () => {
  const contentFiles = generateFileList('content')
  const getEdges = nodeName => contentFiles.nodes.find(n => n.id == nodeName).edges
  var blogs = getEdges('blogs')

  /* sort blogs by dates */
  blogs = blogs.sort((a, b) => b.details.date - a.details.date)
  /* format blogs dates */
  blogs.forEach(b => { b.details.date = b.details.date.toDateString() })


  const webpages = [
	{
	  url: '/',
	  data: blogs,
	  seo: {
		title: 'Vanderfool blog - our van conversion diary',
		cover: 'https://vanderfool.com/assets/van.jpg'
	  }
	},
	{
	  url: '/contact/',
	  data: getPageMd('contact')
	},
	{
	  url: '/registered/',
	  data: getPageMd('registered')
	},
	{
	  url: '/privacy-policy/',
	  data: getPageMd('privacy-policy')
	}
  ]

  // adding all blog webpages
  webpages.push(...blogs.map(blog => {
	const { content } = parseMD(fs.readFileSync(blog.path, 'utf-8'))
	return {
	  url: `/post/${blog.id}`,
	  seo: {
		title: blog.details.title,
		cover: `https://vanderfool.com${blog.details.cover}`,
		subtitle: blog.subtitle,
		url: `https://vanderfool.com/post/${blog.id}`
	  },
	  data: {
		details: blog.details,
		content
	  }
	}
  }))

  return webpages
}
