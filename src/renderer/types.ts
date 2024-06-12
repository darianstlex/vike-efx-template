import type { EventCallable, Scope } from 'effector';
import type { ReactElement, ReactNode } from 'react';

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
        /** Page started effector event */
        pageStarted?: EventCallable<unknown>;
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string;
      };
      cookies: Record<string, string>;
      data?: {
        /** Value for <meta name="description"> defined dynamically */
        description?: string;
        /** Value for <title> defined dynamically by /pages/some-page/+data.js */
        title?: string;
      };
      headers: Record<string, string>;
      pageProps?: Record<string, unknown>;
      scope?: Scope;
      scopeSerialized?: Record<string, unknown>;
    }
  }
}

// Tell TypeScript this file isn't an ambient module
export {};
