import sanityClient from '@sanity/client';
import config from './config';
const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
  apiVersion: '2022-04-07',
});
export default client;
