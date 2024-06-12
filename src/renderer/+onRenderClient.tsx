// https://vike.dev/onRenderClient
import { fork } from 'effector';
import ReactDOM from 'react-dom/client';
import type { OnRenderClientAsync } from 'vike/types';

import { getPageTitle } from './getPageTitle';
import { PageShell } from './PageShell';

let root: ReactDOM.Root;
export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext;

  pageContext.scope = fork({ values: pageContext.scopeSerialized });

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById('react-root');
  if (!container) throw new Error('DOM element #react-root not found');

  // SPA
  if (!container?.innerHTML || !pageContext.isHydration) {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
    // SSR
  } else {
    root = ReactDOM.hydrateRoot(container, page);
  }
  document.title = getPageTitle(pageContext);
};
