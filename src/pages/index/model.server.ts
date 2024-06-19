import { createEffect, sample } from 'effector';

import { pageStarted } from './+pageStarted';
import { queue } from './db';
import { $data } from './model';

sample({
  clock: pageStarted,
  fn: () => 'SOME DATA',
  target: $data,
});

export const getQueueFx = createEffect(() => {
  return queue;
});

export const addToQueueFx = createEffect(() => {
  queue.push(Math.floor(Math.random() * 900) + 100);
  return queue;
});
