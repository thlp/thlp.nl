exports.onCreateNode = ({node, boundActionCreators,}) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === "MarkdownRemark"){
        console.log(node.internal.type);
    }
};


exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
    const { createNodeField } = boundActionCreators;

    const markdownNodes = getNodes()
        //.filter(node => node.internal.type === `MarkdownRemark`)
        .forEach(node => {
            console.log(node.internal.type +": "+ node.id);
        });

};






// exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
//     const { createNodeField } = boundActionCreators;
//     const storiesOfCustomers = {};
//
//     const markdownNodes = getNodes()
//         .filter(node => node.internal.type === `MarkdownRemark`)
//         .forEach(node => {
//             console.log(node.internal.type +"..."+ node.id);
//             if (node.frontmatter.company) {
//                 console.log("Found story with frontmatter: "+node.frontmatter.company);
//                 const companyNode = getNodes().find(
//                     node2 =>
//                         node2.internal.type === "MarkdownRemark" &&
//                         node2.frontmatter.title === node.frontmatter.company
//                 );
//
//                 if (companyNode) {
//                     createNodeField({
//                         node,
//                         name: "company",
//                         value: companyNode.id,
//                     });
//
//
//                     if (!(companyNode.id in storiesOfCustomers)) {
//                         storiesOfCustomers[companyNode.id] = [];
//                     }
//
//                     storiesOfCustomers[companyNode.id].push(node.id);
//                 }
//             }
//             createNodeField({
//                 node,
//                 name: 'test2',
//                 value: 'value2'
//             })
//         });
//
//     Object.entries(storiesOfCustomers).forEach(([companyNodeId, storyIds]) => {
//         createNodeField({
//             node: getNode(companyNodeId),
//             name: "stories",
//             value: storyIds,
//         });
//     });
// };
