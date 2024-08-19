import { useUnit } from 'effector-react';

import { model } from './model';
import { Queue } from './Queue';

export const Page = ({ queue }: { queue: number[] }) => {
  const [data, random, counter, inc] = useUnit([model.$data, model.$random, model.$counter, model.inc]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data}
      <Queue init={queue} />
      <a href={`/example/${random}`}>Example: {random}</a>
      <a href="mdx">Example MDX page</a>
      <button onClick={inc}>Counter: {counter}</button>
    </div>
  );
};
