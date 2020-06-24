import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

const countAState = atom({
  key: 'counterA',
  default: 0,
});

const countBState = atom({
  key: 'counterB',
  default: 0,
});

function DisplayA() {
  const textA = useRecoilValue(countAState);
  return <>[A:{textA}]</>;
}

function DisplayB() {
  const textB = useRecoilValue(countBState);
  return <>[B: {textB}]</>;
}

function ButtonA() {
  const [count, setCount] = useRecoilState(countAState);
  return <button onClick={() => setCount(count + 1)}>A++</button>;
}

function ButtonB() {
  const [count, setCount] = useRecoilState(countBState);
  return <button onClick={() => setCount(count + 1)}>B++</button>;
}

export function RecoilMultipleRoot() {
  return (
    <>
      RecoilMultipleRoot: <br />
      RecoilRoot
      <br />
      <RecoilRoot>
        <ButtonA />
        <ButtonB />
        <DisplayA />
        <DisplayB />
        <br />
        <RecoilRoot>
          {'　'}
          RecoilRoot
          <br />
          {'　'}
          <ButtonA />
          <ButtonB />
          <DisplayA />
          <DisplayB />
        </RecoilRoot>
        <br />
        <RecoilRoot>
          {'　'}
          RecoilRoot
          <br />
          {'　'}
          <ButtonA />
          <ButtonB />
          <DisplayA />
          <DisplayB />
        </RecoilRoot>
        <br />
      </RecoilRoot>
    </>
  );
}
