// https://vike.dev/onRenderHtml
import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';

import { getPageTitle } from './getPageTitle';
import { Shell } from './Shell';

export const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  let pageHtml;
  if (!pageContext.Page) {
    // SPA
    pageHtml = '';
  } else {
    // SSR / HTML-only
    const { Page, data } = pageContext;

    pageHtml = ReactDOMServer.renderToString(
      <Shell pageContext={pageContext}>
        <Page {...(data?.pageProps ? data.pageProps : {})} />
      </Shell>,
    );
  }

  const title = getPageTitle(pageContext);
  const desc = pageContext.data?.description || pageContext.config.description || 'Vike Demo';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // scopeValues: pageContext.scope ? serialize(pageContext.scope) : {},
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    },
  };
};
