import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '52qbqlvq',
  dataset: 'production',  // ← Change to 'production' if that's your dataset
  apiVersion: '2024-01-01',
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
