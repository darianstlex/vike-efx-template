import { Provider } from 'effector-react';
import React from 'react';
import type { PageContext } from 'vike/types';

import { PageContextProvider } from './usePageContext';

import './styles/index.scss';

export const PageShell = ({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) => {
  const PageWrapper = pageContext.config.PageWrapper;
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Provider value={pageContext.scope!}>{PageWrapper ? <PageWrapper>{children}</PageWrapper> : children}</Provider>
      </PageContextProvider>
    </React.StrictMode>
  );
};
