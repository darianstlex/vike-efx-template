import { sample } from 'effector';

import { pageInitiated } from './+pageInitiated';
import { $data } from './model';

sample({
  clock: pageInitiated,
  fn: () => 'SOME DATA',
  target: $data,
});
