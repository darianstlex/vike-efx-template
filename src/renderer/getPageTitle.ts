import type { PageContext } from 'vike/types';

export const getPageTitle = (pageContext: PageContext): string => {
  return pageContext.data?.title || pageContext.config.title || 'Motorway Move';
};
