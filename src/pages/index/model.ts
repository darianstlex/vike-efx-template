import { createEvent, createStore, sample } from 'effector';

import { pageInitiated } from './+pageInitiated';
import { pageStarted } from './+pageStarted';

export const inc = createEvent();

export const $data = createStore('', { sid: '$data' });

export const $random = createStore(0, { sid: '$random' });

export const $counter = createStore(0, { sid: '$counter' }).on(inc, (val) => val + 1);

sample({
  clock: pageInitiated,
  fn: () => Math.round(Math.random() * 1000),
  target: $random,
});

sample({
  clock: pageInitiated,
  fn: () => 'SOME DATA',
  target: $data,
});

sample({
  clock: pageStarted,
  source: $counter,
  filter: (val) => !val,
  fn: () => Math.round(Math.random() * 1000),
  target: $counter,
});

export const model = {
  inc,
  $data,
  $random,
  $counter,
};
