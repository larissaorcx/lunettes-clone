import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

/**
 * 
O nome do repositório Prismic do projeto.
 */
export const LunettesClone = prismic.getRepositoryName(sm.apiEndpoint);

//Atualize a matriz de rotas para corresponder à estrutura de rotas do seu projeto
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
];

/**
 * 
Cria um cliente Prismic para o repositório do projeto. O cliente está acostumado a
 * conteúdo de consulta da API Prismic.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuração para o cliente Prismic.
 */
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
