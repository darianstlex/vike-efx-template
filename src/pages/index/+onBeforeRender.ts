import './model.server';

import { allSettled, fork, serialize } from 'effector';

import { dbService } from '@features/db';

import { pageStarted } from './+pageStarted';

export const onBeforeRender = async () => {
  const scope = fork();
  await allSettled(pageStarted, { scope });
  const queue = await dbService.getQueueFx();
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
