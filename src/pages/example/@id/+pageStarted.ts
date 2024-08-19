import { createPageStart } from '@utilities/events';

import type { data } from './+data';

export const pageStarted = createPageStart<Awaited<ReturnType<typeof data>>>();
