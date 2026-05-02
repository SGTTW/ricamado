// src/lib/typesenseClient.ts
import Typesense from 'typesense';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

// Initialize the Typesense client
export const typesenseClient = new Typesense.Client({
  nodes: [
    {
    host: process.env.TYPESENSE_HOST || 'dkx3i810rtsz4gy9p-1.a1.typesense.net',
      port: 443,
      protocol: process.env.TYPESENSE_PROTOCOL || 'https',
    },
  ],
  apiKey: process.env.TYPESENSE_SEARCH_API_KEY || '6X0G6L67atSJPIFjsqI5fadseiiexYvG', // Use search-only API key
  connectionTimeoutSeconds: 60,
});

// Initialize the InstantSearch adapter
export const searchClient = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.TYPESENSE_SEARCH_API_KEY || '6X0G6L67atSJPIFjsqI5fadseiiexYvG',
    nodes: [
      {
        host: process.env.TYPESENSE_HOST || 'dkx3i810rtsz4gy9p-1.a1.typesense.net',
        port: 443,
        protocol: 'https',
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60,
  },
  additionalSearchParameters: {
    query_by: 'title,location,features,description,tags',
    highlightFields: 'title,location,features,description,tags',
    // sort_by: 'created_at:desc',
    num_typos: 2, // Enable typo tolerance (2 typos allowed)
    drop_tokens_threshold: 1, // Drop tokens if not found
    use_cache: true, // Enable caching for faster searches
  },
}).searchClient;




 