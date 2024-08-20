import { allSettled } from 'effector';
import { Provider } from 'effector-react';
import React, { useEffect } from 'react';
import type { PageContext } from 'vike/types';

import { PageContextProvider } from '@utilities/usePageContext';

import './styles/index.scss';

export const Shell = ({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) => {
  const PageWrapper = pageContext.config.PageWrapper;
  useEffect(() => {
    const firePageStarted = async () => {
      const { pageStarted } = pageContext.config;
      if (pageStarted) {
        await allSettled(pageStarted, {
          scope: pageContext.scope!,
          params: { params: pageContext.routeParams, data: pageContext.data },
        });
      }
    };
    firePageStarted().catch(() => {
      throw 'Page start failed';
    });
  }, [pageContext.config, pageContext.data, pageContext.routeParams, pageContext.scope]);
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Provider value={pageContext.scope!}>{PageWrapper ? <PageWrapper>{children}</PageWrapper> : children}</Provider>
      </PageContextProvider>
    </React.StrictMode>
  );
};
