import React from 'react';
import { createTinyContext } from 'tiny-context';

type State = { count: number };

const { Provider, useContext } = createTinyContext<State>().actions({
  increment: (state, amount: number) => ({ ...state, count: state.count + amount }),
});

function Display() {
  const {
    state: { count },
  } = useContext();
  return <>{count}</>;
}

function Button() {
  const {
    actions: { increment },
  } = useContext();

  return <button onClick={() => increment(1)}>+</button>;
}

export function TinyContextSimple() {
  return (
    <Provider value={{ count: 0 }}>
      TinyContextSimple: <Button /> <Display />
    </Provider>
  );
}
