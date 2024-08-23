import type express from 'express';

import { root } from '../root.js';

const isProduction = process.env.NODE_ENV === 'production';

export const connectAssets = async (app: express.Application) => {
  if (isProduction) {
    const serve = (await import('sirv')).default;
    app.use(
      serve(`${root}/dist/client`, {
        etag: true,
        immutable: true,
        maxAge: 31536000,
      }),
    );
  } else {
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }
};
