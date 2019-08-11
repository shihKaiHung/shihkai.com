import React from "react"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query($id: String!) {
    post: blogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
