import { useUnit } from 'effector-react';

import { $id } from './model';

export const Page = () => {
  const id = useUnit($id);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Example param: {id}
      <a href={'/'}>Home</a>
    </div>
  );
};
