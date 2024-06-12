// https://vike.dev/useData
import type { PageContext } from 'vike/types';

import { usePageContext } from './usePageContext';

/** https://vike.dev/useData */
export const useData = <Data extends PageContext['data']>() => {
  const { data } = usePageContext();
  return data as Data;
};
