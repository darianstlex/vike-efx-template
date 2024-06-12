import { createStore, sample } from 'effector';

import { pageStarted } from '@/pages/index/+pageStarted';

export const $data = createStore('', { sid: '$data' });

sample({
  clock: pageStarted,
  fn: () => 'SOME DATA',
  target: $data,
});
