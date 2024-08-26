import type { ReactNode } from 'react';

export const LayoutTwo = ({ children }: { children: ReactNode }) => {
  return <div style={{ paddingBottom: 24 }}>Layout Two{children}</div>;
};
