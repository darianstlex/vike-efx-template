import type { MouseEventHandler, ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const onHome: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.close();
  };
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <a href={'/'} onClick={onHome}>
          Home
        </a>
      </div>
      <div>{children}</div>
    </div>
  );
};
