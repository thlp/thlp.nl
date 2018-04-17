import React from "react"

import ItemLink from '../components/itemlink'


// export default ({ data: { stories: { edges } } }) => {
//   const Items = edges.map(
//       edge => <ItemLink key={edge.node.id} item={edge.node} />
//   );
//   return <div>{ Items }</div>;
// };

export default ({data}) => {
  console.log({data});
  return <div>test</div>;
};


export const query = graphql`
query IndexQuery {
  stories: allMarkdownRemark(filter: {
    fileAbsolutePath: {regex: "//stories/.*\\.md$/"}, 
    frontmatter: {published: {eq: true}}}) {
    edges {
      node {
        excerpt (pruneLength: 80)
        id
        frontmatter {
          title
          published
        }
      }
    }
  }
}
`;
