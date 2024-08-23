import { createPageInit } from '@utilities/events';

import type { data } from './+data';

export const pageInitiated = createPageInit<Awaited<ReturnType<typeof data>>>();
