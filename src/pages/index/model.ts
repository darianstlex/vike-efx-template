import { createStore, sample } from 'effector';

import { pageStarted } from './+pageStarted';

export const $data = createStore('', { sid: '$data' });

export const $counter = createStore(0, { sid: '$counter' });

sample({
  clock: pageStarted,
  fn: () => Math.round(Math.random() * 1000),
  target: $counter,
});
