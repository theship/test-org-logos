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
      { <ul>
        {
          // eslint-disable-next-line react/prop-types
          allAirtableData.map((nodes: { data:
                                        { org_name: string;
                                          org_logo: { url: string; };
                                        };
                                      }) => (
            <li>
              {nodes.data.org_name}
            </li>
          ))
        }
    </ul> }
    </div>
  );
};

export const query = graphql`
    query {
        allAirtable {
            nodes {
           recordId
            data {
              org_name
               org_logo {
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
