import { useState } from 'react';

import { onUpdate } from './Queue.telefunc';

export const Queue = ({ init = [] }: { init: number[] }) => {
  const [queue, setQueue] = useState(init);
  const onClick = async () => {
    const { data } = await onUpdate();
    setQueue(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={onClick}>Add to Queue</button>
      {JSON.stringify(queue)}
    </div>
  );
};
