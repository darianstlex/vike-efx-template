import { sample } from 'effector';

import { pageStarted } from './+pageStarted';
import { $data } from './model';

sample({
  clock: pageStarted,
  fn: () => 'SOME DATA',
  target: $data,
});
