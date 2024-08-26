import type { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ paddingBottom: 24 }}>
      Global Wrapper
      {children}
    </div>
  );
};
