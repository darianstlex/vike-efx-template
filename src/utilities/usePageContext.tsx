// https://vike.dev/usePageContext
import React, { useContext } from 'react';
import type { PageContext } from 'vike/types';

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

export const PageContextProvider = ({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

/** https://vike.dev/usePageContext */
// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => {
  return useContext(Context);
};
