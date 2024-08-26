import type { ReactNode } from 'react';

export const LayoutThree = ({ children }: { children: ReactNode }) => {
  return <div style={{ paddingBottom: 24 }}>Layout Three{children}</div>;
};
