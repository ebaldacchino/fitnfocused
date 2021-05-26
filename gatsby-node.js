const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allWpProgram {
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
					isChallenge
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

	result.data.allWpProgram.nodes.forEach((session) => {
		createPage({
			path: `/fitness-programs/${session.slug}`,
			component: path.resolve(`src/templates/program-template.js`),
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
