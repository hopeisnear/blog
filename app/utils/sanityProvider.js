import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'klyyehyz',
  dataset: 'production',
  useCdn: false
});
