const fs = require('fs')
const { join, sep } = require('path')
const parseMD = require('parse-md').default

function getExtensionFromFilename (fileName) {
  return fileName.substr(fileName.lastIndexOf('.') + 1)
}

function getDetails (format, data) {
  const formatNormalised = format.toLowerCase()

  switch (formatNormalised) {
	case 'md':
	case 'markdown': {
	  const { metadata } = parseMD(data)
	  return metadata
	}

	case 'json': {
	  return JSON.parse(data)
	}

	default: {
	  console.error('File format not recognised')
	}
  }
}

function getPreview (data) {
  const { content } = parseMD(data)
  const preview = content.replace(/---(.*(\r)?\n)*---/, '')
	.replace(/\[.*\]\(.*\)/g, '')
	.replace(/(\r)?\n/, '')
	.replace(/<div.*>[.\s\S]*?<\/div>/, '')
	.replace(/(\r)?\n/, '')
  const firstSentence = ['.', '!', '?']
	.map(d => preview.indexOf(d))
	.filter(idx => idx > 0)
  const subtitle = preview.substr(0, Math.min(...firstSentence))
  const previewLength = 500
  return {
	preview: preview.length < previewLength ? preview : (preview.substr(0, previewLength) + '...'),
	subtitle
  }
}

function getFolders (source) {
  const isDirectory = source => fs.lstatSync(source).isDirectory()
  const isMdFile = source => !fs.lstatSync(source).isDirectory() && source.endsWith('.md')
  const getAllListings = source =>
	fs.readdirSync(source).map(name => join(source, name))
  const allContent = getAllListings(source)
  const edges = allContent.filter(isMdFile).map(file => {
	const data = fs.readFileSync(file, 'utf-8')
	const id = file.substr(file.lastIndexOf(sep) + 1)
	const format = getExtensionFromFilename(id)
	const details = getDetails(format, data)
	const { preview, subtitle } = getPreview(data)

	return {
	  id,
	  format,
	  path: file,
	  details,
	  preview,
	  subtitle
	}
  })

  const nodes = allContent.filter(isDirectory).map(dir => getFolders(dir))
  const result = {
	id: source.substr(source.lastIndexOf(sep) + 1)
  }
  if (nodes.length) {
	result.nodes = nodes
  }
  if (edges.length) {
	result.edges = edges
  }
  return result
}

function generateFileList (src) {
  return getFolders(src)
}

module.exports = {
  generateFileList
}
