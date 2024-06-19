import { addToQueueFx } from './model.server';

export const onUpdate = async () => {
  const data = await addToQueueFx();
  console.log('SERVER: ', JSON.stringify(data)); // eslint-disable-line
  return { data };
};
