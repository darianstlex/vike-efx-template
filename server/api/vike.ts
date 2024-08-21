import type express from 'express';
import { renderPage } from 'vike/server';

export async function connectVike(app: express.Application) {
  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      cookies: req.cookies,
      headersOriginal: req.headers,
      urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    if (pageContext.errorWhileRendering && !pageContext.is404) {
      // add logger here
      console.log(pageContext.errorWhileRendering); // eslint-disable-line
    }
    const { httpResponse } = pageContext;
    if (!httpResponse) {
      return next();
    } else {
      const { earlyHints, headers, statusCode } = httpResponse;
      if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) }); // early hits are not supported yet
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode);
      httpResponse.pipe(res);
    }
  });
}
