import React from 'react';
import { graphql } from 'gatsby';

// eslint-disable-next-line react/prop-types
export default ({data}) => {
  const allAirtableData = data.allAirtable.nodes;
  return (
    <div>
      <h1>Organization Logo</h1>
      <div style={{ color: `purple` }}>
        <h1>Get Organization Logos</h1>
        <p>Get a list of organizations from Airtable</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      {
       <ul>
        {
          // eslint-disable-next-line react/prop-types
          allAirtableData.map((node: {  
                                        recordId:number;
                                        data:
                                        { Org_Name: string;
                                          Org_Logo: [{ url: string; }];
                                        };
                                      }, i:number ) => (
            <li key={i}>
              {node.data.Org_Name} -- {node.recordId}
              <br></br>
              {node.data.Org_Logo?.map((Org_Logo: {url:string}) => (
                            	<span>{Org_Logo.url}</span>
                            )) }
            </li>
          ))
        }
    </ul>
   }

    </div>
  );
};

export const query = graphql`
  query {
    allAirtable (sort: {order: ASC, fields: data___Org_Logo___url}) {
      nodes {
      recordId
      data {
        Org_Name
          Org_Logo {
            filename
            url
            thumbnails {
              small {
                width
              }
            }
          }
      }
      }
    }
  }
`;
