require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Fit 'n' Focused`,
		description: `Geelong's best kid-friendly fitness classes!`,
		author: 'Edward Baldacchino',
		twitterUsername: '@john_doe',
		image: '/images/twitter-img.png',
		siteUrl: 'https://fitnfocused.netlify.app',
	},
	flags: {
		PRESERVE_WEBPACK_CACHE: true,
		FAST_DEV: true,
		DEV_SSR: true,
		PARALLEL_SOURCING: true,
	},
	plugins: [
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: 'http://fitnfocused.local/graphql',
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ['/cancellations'],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://fitnfocused.netlify.app',
				sitemap: 'https://fitnfocused.netlify.app/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/', disallow: ['/cancellations'] }],
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{ family: 'Open Sans' },
						{ family: 'Roboto Condensed' },
						{ family: 'Anton' },
					],
				},
			},
		},
		// {
		// 	resolve: `gatsby-source-google-reviews-en`,
		// 	options: {
		// 		apiKey: process.env.API_KEY,
		// 		placeId: process.env.PLACE_ID,
		// 	},
		// },
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `619232183`,
				access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
				instagram_id: 'fitnfocusedpt',
				paginate: 100,
				maxPosts: 1000,
				hashtags: true,
			},
		},
		`gatsby-plugin-netlify`,
	],
};
