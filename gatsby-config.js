module.exports = {
  siteMetadata: {
    title: `The Hague Legal Partners`,
  },
  // mapping: {
  //     "MarkdownRemark.fields.author": "MarkdownRemark",
  //     "MarkdownRemark.fields.posts": "MarkdownRemark",
  // },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `collections`,
        path: `${__dirname}/collections/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
