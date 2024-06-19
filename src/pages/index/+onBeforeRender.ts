import './model.server';

import { allSettled, fork, serialize } from 'effector';

import { pageStarted } from './+pageStarted';
import { queue } from './data';

export const onBeforeRender = async () => {
  const scope = fork();
  await allSettled(pageStarted, { scope });
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
