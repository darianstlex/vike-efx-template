import { createEvent, createStore } from 'effector';

/**
 * AppStarted event - runs oc client side before the actual render, should not
 * be used for UI changes as will cause diff in server/client render
 */
export const appStarted = createEvent();

export const $isClient = createStore(typeof document !== 'undefined', {
  serialize: 'ignore', // should not be serialized, as it is a separate value for both server and client
  sid: '$is-client',
});
