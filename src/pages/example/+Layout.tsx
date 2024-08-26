import type { ReactNode } from 'react';

import { LayoutOne } from '@layouts/LayoutOne';
import { LayoutTwo } from '@layouts/LayoutTwo';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutOne>
      <LayoutTwo>{children}</LayoutTwo>
    </LayoutOne>
  );
};
