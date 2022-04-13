/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alen Andry's Blog",
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name:"pages"
      },
      
    },
    'gatsby-transformer-remark'
  ],
}
