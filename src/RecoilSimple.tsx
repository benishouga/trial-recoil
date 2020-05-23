import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

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
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

export function RecoilSimple() {
  return (
    <RecoilRoot>
      RecoilSimple: <Button /> <Display />
    </RecoilRoot>
  );
}
