import 'dotenv/config';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';

import { connectAssets } from './api/assets.js';
import { connectTelefunc } from './api/telefunc.js';
import { connectVike } from './api/vike.js';

async function startServer() {
  const app = express();

  app.use(cookieParser());
  app.use(compression());
  app.use(express.text()); // Parse & make HTTP request body available at `req.body`

  await connectAssets(app);
  connectTelefunc(app);
  // Other middlewares

  // It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  connectVike(app);

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`); // eslint-disable-line
}

await startServer();
