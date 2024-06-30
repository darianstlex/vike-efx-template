import type express from 'express';
import { config, telefunc } from 'telefunc';

config.telefuncUrl = '/api/_intercom';

export async function connectTelefunc(app: express.Application) {
  app.all('/api/_intercom', async (req, res) => {
    const context = {};
    const httpResponse = await telefunc({
      url: req.originalUrl,
      method: req.method,
      body: req.body,
      context,
    });
    const { body, contentType, statusCode } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });
}
