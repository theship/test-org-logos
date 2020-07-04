/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require("ts-node").register({ files: true });
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

// exports createSchemaCustomization = ({ actions }) =>{
//   actions.createTypes(`
//     type Airtable implements Node @infer {
//       org_logo: AirtableDataOrg_logo
//     }
//   `)
// }