import React, { FC } from 'react';
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

const Nested: FC<{}> = ({ children }) => {
  return (
    <RecoilRoot>
      RecoilRoot
      <br />
      {'　'}
      <ButtonA />
      <DisplayA />
      {children}
    </RecoilRoot>
  );
};

export function NestedRoot() {
  return (
    <>
      NestedRoot:
      <br />
      RecoilRoot
      <br />
      <RecoilRoot>
        <ButtonB />
        <Nested>
          <DisplayB />
        </Nested>
      </RecoilRoot>
    </>
  );
}
