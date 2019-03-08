import TaxonomyTemplate from './taxonomy'
import { graphql } from 'gatsby'

export default TaxonomyTemplate

export const query = graphql`
  query TagTaxonomyQuery($lang: String!, $taxonomy: [String]!) {
    articles: allMarkdownRemark(
      filter: {
        frontmatter: {
          private: { ne: true }
          draft: { ne: true }
          type: { eq: "post" }
          lang: { eq: $lang }
          tags: { in: $taxonomy }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            url
          }
        }
      }
    }
  }
`