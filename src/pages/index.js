import React from "react"

import ItemLink from '../components/itemlink'


export default () => {
  return <div>test</div>;
};


// export const query = graphql`
// query IndexQuery {
//   stories: allMarkdownRemark(filter: {
//     fileAbsolutePath: {regex: "//stories/.*\\.md$/"},
//     frontmatter: {published: {eq: true}}}) {
//     edges {
//       node {
//         excerpt (pruneLength: 80)
//         id
//         frontmatter {
//           title
//           published
//         }
//       }
//     }
//   }
// }
// `;
