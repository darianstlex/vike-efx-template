import { dbService } from '@features/db';

export const onUpdate = async () => {
  const data = await dbService.addToQueueFx();
  console.log('SERVER: ', JSON.stringify(data)); // eslint-disable-line
  return { data };
};
