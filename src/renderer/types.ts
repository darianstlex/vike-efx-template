import type { EventCallable, Scope } from 'effector';
import type { ReactElement, ReactNode } from 'react';
import type { PageContextServer } from 'vike/types';

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: () => ReactElement;
      /** https://vike.dev/render */
      abortReason?: string;
      config: {
        PageWrapper?: ({ children }: { children: ReactNode }) => ReactElement;
        /** Value for <meta name="description"> defined statically */
        description?: string;
        /** Hook that runs before page init */
        onAfterInit?: (pageContext: PageContextServer) => Promise<void>;
        /** Hook that runs before page init */
        onBeforeInit?: (pageContext: PageContextServer) => Promise<void>;
        /** Effector Event - Page initiated on server */
        pageInitiated?: EventCallable<PageContextServer>;
        /** Effector Event - Page started on client */
        pageStarted?: EventCallable<{ data: unknown; params: Record<string, string> }>;
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string;
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
