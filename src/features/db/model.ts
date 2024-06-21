import { createEffect } from 'effector';

import { queue } from './db';

export const getQueueFx = createEffect(() => {
  return queue;
});

export const addToQueueFx = createEffect(() => {
  queue.push(Math.floor(Math.random() * 900) + 100);
  return queue;
});
