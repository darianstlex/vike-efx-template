import type { ReactNode } from 'react';

import { LayoutOne } from '@layouts/LayoutOne';
import { LayoutThree } from '@layouts/LayoutThree';
import { LayoutTwo } from '@layouts/LayoutTwo';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutOne>
      <LayoutTwo>
        <LayoutThree>{children}</LayoutThree>
      </LayoutTwo>
    </LayoutOne>
  );
};
