import type { EventCallable, Scope } from 'effector';
import type { ReactElement, ReactNode } from 'react';
import type { PageContextClient, PageContextServer } from 'vike/types';

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: () => ReactElement;
      /** https://vike.dev/render */
      abortReason?: string;
      config: {
        /** Value for <meta name="description"> defined statically */
        description?: string;
        /** Hook that runs after the page init event */
        onAfterInit?: (pageContext: PageContextServer) => Promise<void>;
        /** Hook that runs before the page init event */
        onBeforeInit?: (pageContext: PageContextServer) => Promise<void>;
        /** Effector Event - Page initiated on server */
        pageInitiated?: EventCallable<PageContextServer>;
        /**
         * Hook that runs before the page start, on client, before render.
         * On UI changes will cause diff to server/client render
         */
        onBeforeStart?: (pageContext: PageContextClient) => Promise<void>;
        /**
         * Effector Event - Page started on client
         * Runs after the first render
         */
        pageStarted?: EventCallable<{ data: unknown; params: Record<string, string> }>;
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string;
        /** Page layout component */
        Layout?: ({ children }: { children: ReactNode }) => ReactElement;
        /** Page wrapper component */
        Wrapper?: ({ children }: { children: ReactNode }) => ReactElement;
      };
      cookies: Record<string, string>;
      data?: {
        /** Value for <meta name="description"> defined dynamically */
        description?: string;
        /** page props passed from the data hook */
        pageProps?: Record<string, unknown>;
        /** Value for <title> defined dynamically by /pages/some-page/+data.js */
        title?: string;
      };
      headers: Record<string, string>;
      scope?: Scope;
      scopeValues?: Record<string, unknown>;
    }
  }
}

// Tell TypeScript this file isn't an ambient module
export {};
