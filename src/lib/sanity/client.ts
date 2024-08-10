import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'fu1zqdyp',
  dataset: 'production',
  apiVersion: '2024-08-10',
  useCdn: false,
})
