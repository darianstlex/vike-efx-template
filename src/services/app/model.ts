import { createStore } from 'effector';

export const $isClient = createStore(typeof document !== 'undefined', {
  serialize: 'ignore', // should not be serialized, as it is a separate value for both server and client
  sid: '$is-client',
});
