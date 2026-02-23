import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ym6eru1l',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
