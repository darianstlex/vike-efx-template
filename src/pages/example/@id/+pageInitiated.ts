import { createPageStart } from '@utilities/events';

import type { data } from './+data';

export const pageInitiated = createPageStart<Awaited<ReturnType<typeof data>>>();
