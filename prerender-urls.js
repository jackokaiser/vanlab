const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

let { blogs } = generateFileList('content').nodes.reduce((obj, n) => {obj[n.id] = n; return obj}, {})

/* sort blogs by dates */
blogs.edges = blogs.edges.sort((a,b) => b.details.date - a.details.date)
/* format blogs dates */
blogs.edges.forEach(b => {b.details.date = b.details.date.toDateString()})

function getPageMd(id) {
	const data = parseMD(fs.readFileSync(join('content', 'pages', id + '.md'), 'utf-8'));
	return data;
};

module.exports = () => {
	const webpages = [
		{
			url: '/',
			data: blogs,
			seo: {
				title: 'Vanderfool blog - our van building diary',
				cover: 'https://vanderfool.com/assets/van.jpg',
				subtitle: ''
			}
		},
		{
			url: '/contact/',
			data: getPageMd('contact')
		},
		{ url: '/contact/success' }
	];

	// adding all blog webpages
	webpages.push(...blogs.edges.map(blog => {
		let data;
		if (blog.format === 'md') {
			const { content } = parseMD(fs.readFileSync(blog.path, 'utf-8'));
			data = content;
		} else {
			data = fs.readFileSync(blog.path, 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}
		return {
			url: `/post/${blog.id}`,
			seo: {
				title: blog.details.title,
				cover: `https://vanderfool.com${blog.details.cover}`,
				subtitle: blog.preview
			},
			data: {
				details: blog.details,
				content: data
			}
		};
	}));

	return webpages;
};
