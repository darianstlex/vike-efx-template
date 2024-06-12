import { createEvent, createStore } from 'effector';

export const openModal = createEvent<string>();
export const openDataModal = createEvent<{ data: Record<string, unknown>; name: string }>();
export const closeModal = createEvent<string>();
export const closeAllModals = createEvent();

/**
 * Modals store - control modals state
 */
export const $modals = createStore<Record<string, boolean | Record<string, unknown>>>({}, { sid: '$modals' })
  .on(openModal, (state, modal) => ({
    ...state,
    [modal]: true,
  }))
  .on(openDataModal, (state, { data, name }) => ({
    ...state,
    [name]: data,
  }))
  .on(closeModal, (state, modal) => ({ ...state, [modal]: false }))
  .reset(closeAllModals);
