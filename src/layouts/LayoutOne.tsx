import type { ReactNode } from 'react';

export const LayoutOne = ({ children }: { children: ReactNode }) => {
  return <div style={{ paddingBottom: 24 }}>Layout One{children}</div>;
};
