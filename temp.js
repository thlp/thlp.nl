exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
    const { createNodeField } = boundActionCreators;

    const postsOfAuthors = {};
    // iterate thorugh all markdown nodes to link books to author
    // and build author index
    const markdownNodes = getNodes()
        .filter(node => node.internal.type === "MarkdownRemark")
        .forEach(node => {
            if (node.frontmatter.author) {
                const authorNode = getNodes().find(
                    node2 =>
                        node2.internal.type === "MarkdownRemark" &&
                        node2.frontmatter.title === node.frontmatter.author
                );

                if (authorNode) {
                    createNodeField({
                        node,
                        name: "author",
                        value: authorNode.id,
                    });

                    // if it's first time for this author init empty array for his posts
                    if (!(authorNode.id in postsOfAuthors)) {
                        postsOfAuthors[authorNode.id] = [];
                    }
                    // add book to this author
                    postsOfAuthors[authorNode.id].push(node.id);
                }
            }
        });

    Object.entries(postsOfAuthors).forEach(([authorNodeId, postIds]) => {
        createNodeField({
            node: getNode(authorNodeId),
            name: "posts",
            value: postIds,
        });
    });
};
