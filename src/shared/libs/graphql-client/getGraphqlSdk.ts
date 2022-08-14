import { GraphQLClient } from 'graphql-request';
import { getSdk, Sdk } from '../../../graphql/generated/graphql';

const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/';

const getGraphqlClient = (): GraphQLClient => {
  const endpointUrl = `${baseUrl}${import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID}`;

  return new GraphQLClient(endpointUrl, {
    headers: {
      authorization: `Bearer ${import.meta.env.PUBLIC_CONTENTFUL_API_TOKEN}`,
      'Access-Control-Allow-Origin': '*',
    },
  });
};

export const getGraphqlSdk = (): Sdk => {
  return getSdk(getGraphqlClient());
};
