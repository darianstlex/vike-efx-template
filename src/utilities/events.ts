import { createEvent } from 'effector';

export function createPageStart<T = void>() {
  return createEvent<{ data: T; params: Record<string, string> }>();
}
