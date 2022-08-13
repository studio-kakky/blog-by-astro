import { GraphQLClient } from 'graphql-request';

const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/';

export const getGraphqlClient = (): GraphQLClient => {
  const endpointUrl = `${baseUrl}${import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID}`;

  return new GraphQLClient(endpointUrl, {
    headers: {
      authorization: `Bearer ${import.meta.env.PUBLIC_CONTENTFUL_API_TOKEN}`,
      'Access-Control-Allow-Origin': '*',
    },
  });
};
