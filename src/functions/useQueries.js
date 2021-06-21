import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		allWpClass {
			classes: nodes {
				title
				excerpt
				slug
			}
		}
		allWpChallenge {
			challenges: nodes {
				title
				excerpt
				slug
				featured
				startDate
			}
		}
		allWpMembership {
			memberships: nodes {
				title
				price
				paymentFrequency
				isFeatured
				sellingPoint1
				sellingPoint2
				sellingPoint3
				sellingPoint4
				sellingPoint5
			}
		}
		wpChallenge(featured: { eq: true }) {
			slug
			title
			startDate
		}
		allInstaNode(limit: 6) {
			nodes {
				id
				localFile {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
					}
				}
				caption
			}
		}
		imageSharp(id: { eq: "100fba6a-685d-5375-a4c6-d418a3023379" }) {
			gatsbyImageData(
				width: 200
				placeholder: BLURRED
				formats: [AUTO, WEBP, AVIF]
			)
		}
	}
`;

const Queries = () => {
	const {
		allWpClass: { classes },
		allWpChallenge: { challenges },
		allWpMembership: { memberships },
		wpChallenge: challenge,
		allInstaNode: { nodes: igPosts },
		imageSharp: { gatsbyImageData: geoOverlayData },
	} = useStaticQuery(query);
	const featuredMemberships = memberships.filter(
		({ isFeatured }) => isFeatured
	);
	featuredMemberships.reverse();
	const notFeaturedNorUpfrontMemberships = memberships.filter(
		({ isFeatured, paymentFrequency }) =>
			!isFeatured && paymentFrequency !== 'upfront'
	);
	const formattedMemberships = [
		...featuredMemberships,
		...notFeaturedNorUpfrontMemberships,
	];
	const formattedInstagramPosts = igPosts.map((post) => {
		const {
			caption,
			id,
			localFile: {
				childImageSharp: { gatsbyImageData },
			},
		} = post;
		return {
			id,
			caption,
			gatsbyImageData,
			url: `https://www.instagram.com/p/${id}`,
		};
	});

	return {
		classes,
		challenges,
		memberships,
		challenge,
		formattedMemberships,
		formattedInstagramPosts,
		geoOverlayData,
	};
};

export default Queries;
