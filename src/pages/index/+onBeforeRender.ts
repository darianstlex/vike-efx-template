import { allSettled, fork, serialize } from 'effector';
import type { PageContext } from 'vike/types';

import { queue } from './data';

export const onBeforeRender = async (pageContext: PageContext) => {
  const scope = fork();
  await allSettled<any>(pageContext.config.pageStarted!, { scope });
  return {
    pageContext: {
      scope,
      scopeSerialized: serialize(scope),
      pageProps: {
        queue,
      },
    },
  };
};
