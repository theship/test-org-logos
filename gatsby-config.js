/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("ts-node").register({ files: true });
require("dotenv").config({
  // gatsby changes the NODE_ENV based on whether 
  // gatsby develop
  // or 
  // gatsby production
  // is built from the commandline
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Get Airtable using React Gatsby TypeScript GraphQL`,
    description: `Simple & sound: the right toolchain to fold in a Rest API into your app.`,
    author: `@theship juleeburdekin.com`,
    apiUrl: process.env.API_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: `${__dirname}/src/styles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Orgs',
            tableView: `Grid view`,
            defaultValues: {
              // currently does not accept null / undefined. use empty string instead
              // and perform your conditional logic on name_of_field.length > 0 ? condition_1 : condition_2
              NAME_OF_FIELD_THAT_WILL_OTHERWISE_NOT_BE_RETURNED_IF_ALL_VALUES_ARE_BLANK:
                "blah",
              // ... etc
            },
            mapping: { Image: "fileNode" },
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
