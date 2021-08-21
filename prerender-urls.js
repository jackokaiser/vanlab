const { generateFileList } = require('./src/crawler')
const { join } = require('path')

const fs = require('fs')
const parseMD = require('parse-md').default

function getLangPrefix(lang) {
  const defaultLang = "en"
  return lang === defaultLang ? '' : lang
}

module.exports = () => {
  const contentFiles = generateFileList('content')
  const getEdges = nodeName => contentFiles.nodes.find(n => n.id == nodeName).edges
  var blogs = {
	en: getEdges('blogs_en'),
	fr: getEdges('blogs_fr')
  }
  var pages = {
	en: getEdges('pages_en'),
	fr: getEdges('pages_fr')
  }

  for ([lang, blogs_by_lang] of Object.entries(blogs)) {
	/* sort blogs by dates */
	blogs_by_lang.sort((a, b) => b.details.date - a.details.date)
	/* format blogs dates */
	blogs_by_lang.forEach(b => { b.details.date = b.details.date.toDateString() })
  }


  const webpages = [
	{
	  url: '/',
	  data: blogs['en'],
	  seo: {
		title: 'Vanderfool blog - our van conversion diary',
		cover: 'https://vanderfool.com/assets/van.jpg'
	  }
	},
	{
	  url: '/fr',
	  data: blogs['fr'],
	  seo: {
		title: 'Vanderfool blog - Le journal de conversion de notre van',
		cover: 'https://vanderfool.com/assets/van.jpg'
	  }
	}
  ]

  for (const lang of ["en", "fr"]) {
	// adding all pages
	webpages.push(...pages[lang].map(page => {
	  const { content } = parseMD(fs.readFileSync(page.path, 'utf-8'))
	  const url = join('/', getLangPrefix(lang), page.id.slice(0, -3))
	  return {
		url,
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
	webpages.push(...blogs[lang].map(blog => {
	  const { content } = parseMD(fs.readFileSync(blog.path, 'utf-8'))
	  const url = join('/', getLangPrefix(lang), 'post', blog.id)
	  return {
		url,
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
  }
  return webpages
}
