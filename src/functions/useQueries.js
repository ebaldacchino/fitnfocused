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
		allWpProgram {
			programs: nodes {
				title
				excerpt
				slug
				isChallenge
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
	}
`;

const Queries = () => {
	const {
		allWpClass: { classes },
		allWpProgram: { programs },
		allWpMembership: { memberships },
	} = useStaticQuery(query);
	return { classes, programs, memberships };
};

export default Queries;
