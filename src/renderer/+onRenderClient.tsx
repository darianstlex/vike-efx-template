// https://vike.dev/onRenderClient
import { allSettled, fork, serialize } from 'effector';
import ReactDOM from 'react-dom/client';
import type { OnRenderClientAsync } from 'vike/types';

import { appService } from '@services/app';

import { getPageTitle } from './getPageTitle';
import { Shell } from './Shell';

let root: ReactDOM.Root;
export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, data } = pageContext;

  window.VIKE_EFX_SCOPE = fork({
    values: {
      ...(window.VIKE_EFX_SCOPE ? serialize(window.VIKE_EFX_SCOPE) : {}),
      ...pageContext.scopeValues,
    },
  });

  pageContext.scope = window.VIKE_EFX_SCOPE;

  if (pageContext.isHydration) {
    await allSettled(appService.appStarted, { scope: pageContext.scope });
  }

  const page = (
    <Shell pageContext={pageContext}>
      <Page {...(data?.pageProps ? data.pageProps : {})} />
    </Shell>
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
