import { sample } from 'effector';

import { createPageStart } from '@utilities/events';

import { $data, $random } from './model';

export const pageInitiated = createPageStart();

sample({
  clock: pageInitiated,
  fn: () => 'SOME DATA',
  target: $data,
});

sample({
  clock: pageInitiated,
  fn: () => Math.round(Math.random() * 1000),
  target: $random,
});
