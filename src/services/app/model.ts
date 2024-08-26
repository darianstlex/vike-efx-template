import { createEvent, createStore } from 'effector';

/**
 * AppStarted event - runs on client side before the actual render, in case
 * is used for UI changes will cause diff in server/client render
 */
export const appStarted = createEvent();

export const $isClient = createStore(typeof document !== 'undefined', {
  serialize: 'ignore', // should not be serialized, as it is a separate value for both server and client
  sid: '$is-client',
});
