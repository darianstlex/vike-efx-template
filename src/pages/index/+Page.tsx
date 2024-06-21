import { useUnit } from 'effector-react';

import { $data } from './model';
import { Queue } from './Queue';

export const Page = ({ queue }: { queue: number[] }) => {
  const data = useUnit($data);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data}
      <Queue init={queue} />
    </div>
  );
};
