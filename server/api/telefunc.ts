import type express from 'express';
import { telefunc } from 'telefunc';

export async function connectTelefunc(app: express.Application) {
  app.all('/_telefunc', async (req, res) => {
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
