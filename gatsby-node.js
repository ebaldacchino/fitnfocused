const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allWpChallenge {
				nodes {
					featuredImage {
						node {
							localFile {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
										formats: [AUTO, WEBP]
									)
								}
							}
						}
					}
					slug
					title
					excerpt
					startDate
					featured
				}
			}
			allWpClass {
				nodes {
					featuredImage {
						node {
							localFile {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
										formats: [AUTO, WEBP]
									)
								}
							}
						}
					}
					slug
					title
					excerpt
				}
			}
		}
	`);

	result.data.allWpChallenge.nodes.forEach((session) => {
		createPage({
			path: `/fitness-challenges/${session.slug}`,
			component: path.resolve(`src/templates/challenge-template.js`),
			context: session,
		});
	});
	result.data.allWpClass.nodes.forEach((session) => {
		createPage({
			path: `/fitness-classes/${session.slug}`,
			component: path.resolve(`src/templates/class-template.js`),
			context: session,
		});
	});
};
