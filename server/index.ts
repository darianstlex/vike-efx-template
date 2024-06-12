import 'dotenv/config';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';

import { connectTelefunc } from './api/telefunc.js';
import { connectVike } from './api/vike.js';
import { root } from './root.js';

const isProduction = process.env.NODE_ENV === 'production';

async function connectAssets(app: express.Application) {
  if (isProduction) {
    const serve = (await import('sirv')).default;
    app.use(serve(`${root}/dist/client`));
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
}

async function startServer() {
  const app = express();

  app.use(cookieParser());
  app.use(compression());
  app.use(express.text()); // Parse & make HTTP request body available at `req.body`

  await connectAssets(app);
  await connectTelefunc(app);

  // It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  await connectVike(app);

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`); // eslint-disable-line
}

await startServer();
