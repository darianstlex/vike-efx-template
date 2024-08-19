import type { Config } from 'vike/types';

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  passToClient: ['pageProps', 'scopeValues'],
  prerender: false,
  // https://vike.dev/meta
  meta: {
    // define page 'title'
    title: {
      env: { server: true, client: true },
    },
    // define page 'description'
    description: {
      env: { server: true },
    },
    // define 'PageWrapper' component
    PageWrapper: {
      env: { server: true, client: true },
    },
    // page start event
    pageStarted: {
      env: { server: true, client: true },
    },
  },
  hydrationCanBeAborted: true,
} satisfies Config;
