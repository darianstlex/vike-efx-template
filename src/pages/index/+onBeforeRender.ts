import { allSettled, fork, serialize } from 'effector';

import { pageStarted } from './+pageStarted';
import { getQueueFx } from './model.server';

export const onBeforeRender = async () => {
  const scope = fork();
  await allSettled(pageStarted, { scope });
  const queue = await getQueueFx();
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
