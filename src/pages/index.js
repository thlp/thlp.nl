import React from "react"

import ItemLink from '../components/itemlink'


export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const Items = edges.map(
      edge => <ItemLink key={edge.node.id} item={edge.node} />
  );
  return <div>{ Items }</div>;
};

export const query = graphql`
query IndexQuery {
  allMarkdownRemark{
    edges {
      node {
        id
        frontmatter {
          title
        }
      }
      }
    }
}
`;
