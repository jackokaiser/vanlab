const { generateFileList } = require('./src/crawler')
const { join } = require('path')

const fs = require('fs')
const parseMD = require('parse-md').default

function getLangPrefix(lang) {
  const defaultLang = "en"
  return lang === defaultLang ? '' : lang
}

function getEdges(contentFiles, nodeName) {
  return contentFiles.nodes.find(n => n.id == nodeName).edges
}

function filterByLang(edges, lang) {
  let lang_edges = edges.filter(edge => edge.id.startsWith(lang))
  lang_edges.forEach(edge => edge.id = edge.id.slice(lang.length + 1))
  return lang_edges
}

module.exports = () => {
  const contentFiles = generateFileList('content')

  const all_pages = getEdges(contentFiles, 'pages')
  const all_blogs = getEdges(contentFiles, 'blogs').sort((a, b) => b.details.date - a.details.date)

  const pages = {
	en: filterByLang(all_pages, 'en'),
	fr: filterByLang(all_pages, 'fr')
  }

  const blogs = {
	en: filterByLang(all_blogs, 'en'),
	fr: filterByLang(all_blogs, 'fr')
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
