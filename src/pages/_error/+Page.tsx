import { usePageContext } from '@utilities/usePageContext';

export const Page = () => {
  const pageContext = usePageContext();
  return pageContext.is404 ? 'NOT FOUND' : 'ERROR';
};
