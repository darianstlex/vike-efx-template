import type { Config } from 'vike/types';

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  passToClient: ['scopeValues'],
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
    // runs before page init
    onBeforeInit: {
      env: { server: true, client: false },
    },
    // runs after page init
    onAfterInit: {
      env: { server: true, client: false },
    },
    // server page initiate event
    pageInitiated: {
      env: { server: true, client: false },
    },
    // client page start event
    pageStarted: {
      env: { server: false, client: true },
    },
  },
  hydrationCanBeAborted: true,
} satisfies Config;
