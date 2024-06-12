import { queue } from './data';

export const onUpdate = async () => {
  queue.push(Math.floor(Math.random() * 900) + 100);
  console.log('SERVER: ', JSON.stringify(queue)); // eslint-disable-line
  return { data: queue };
};
