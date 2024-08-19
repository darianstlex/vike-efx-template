import { useUnit } from 'effector-react';

import { $counter, $data } from './model';
import { Queue } from './Queue';

export const Page = ({ queue }: { queue: number[] }) => {
  const [data, counter] = useUnit([$data, $counter]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data}
      <Queue init={queue} />
      <a href={`/example/${counter}`}>Example: {counter}</a>
      <a href="mdx">Example MDX page</a>
    </div>
  );
};
