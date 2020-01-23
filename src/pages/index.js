import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {edges && edges.map((item, index) => {
          const { node } = item;
          const { frontmatter } = node;

          return (
            <div key={index} className="row">
              <h3>{frontmatter.title}</h3>
              <Link to={frontmatter.path}>{frontmatter.path}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
          date(formatString: "DD/MM")
          path
        }
      }
    }
  }
}
`

export default IndexPage
