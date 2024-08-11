import { client } from '$lib/sanity/client';
import type { SanityDocument } from '@sanity/client';

export async function load() {
  const data = await client.fetch<SanityDocument[]>(`*[_type == "landingPage"][0]`);

  if (data) {
    return data
  }

  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
