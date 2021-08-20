const { generateFileList } = require('./src/crawler')
const { join } = require('path')
const fs = require('fs')
const parseMD = require('parse-md').default

module.exports = () => {
  const contentFiles = generateFileList('content')
  const getEdges = nodeName => contentFiles.nodes.find(n => n.id == nodeName).edges
  var blogs = getEdges('blogs')
  var pages = getEdges('pages')

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
	}
  ]

  // adding all pages
  webpages.push(...pages.map(page => {
	const { content } = parseMD(fs.readFileSync(page.path, 'utf-8'))
	const url = page.id.slice(0, -3)
	return {
	  url: `/${url}`,
	  seo: {
		title: page.details.title,
	  },
	  data: {
		details: page.details,
		content
	  }
	}
  }))

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
