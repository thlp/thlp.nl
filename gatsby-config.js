module.exports = {
  siteMetadata: {
    title: `The Hague Legal Partners`,
  },
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
