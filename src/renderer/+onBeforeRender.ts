import { allSettled, fork, serialize } from 'effector';
import type { OnBeforeRenderAsync } from 'vike/types';

import { appService } from '@services/app';

export const onBeforeRender: OnBeforeRenderAsync = async (pageContext) => {
  const { pageStarted } = pageContext.config;

  const scope = fork();

  await allSettled(appService.appStarted, { scope });

  if (pageStarted) {
    await allSettled(pageStarted, {
      scope,
      params: { params: pageContext.routeParams, data: pageContext.data },
    });
  }

  return {
    pageContext: {
      scope,
      scopeValues: serialize(scope),
    },
  };
};
