import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'produto',
    path: '/',
  },
  {
    type: 'produto',
    // resolvers: {
    //   category: 'category',
    // },
    path: '/produtos?category=Grau',
  },
  {
    type: 'produto',
    path: '/detalhes/:uid',
  },
];

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
