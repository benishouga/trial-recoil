import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

import { wait } from './wait';

const countState = atom({
  key: 'counter',
  default: 0,
});

function Display() {
  const text = useRecoilValue(countState);
  return <>{text}</>;
}

function Button() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <button
      onClick={async () => {
        await wait();
        setCount(count + 1);
      }}
    >
      +
    </button>
  );
}

export function RecoilAsync() {
  return (
    <RecoilRoot>
      AsyncApp: <Button /> <Display />
    </RecoilRoot>
  );
}
