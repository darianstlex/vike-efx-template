// import './model.server';

import { dbService } from '@features/db';

export const data = async () => {
  const queue = await dbService.getQueueFx();
  return {
    pageProps: {
      queue,
    },
  };
};
