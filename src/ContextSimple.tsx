import React, { useContext, useState, createContext, PropsWithChildren } from 'react';

const Context = createContext({ count: 0, setCount: (_: number) => {} });

function Provider({ value, children }: PropsWithChildren<{ value: { count: number } }>) {
  const [count, setCount] = useState(value.count);
  return <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>;
}

function Display() {
  const { count } = useContext(Context);
  return <>{count}</>;
}

function Button() {
  const { count, setCount } = useContext(Context);
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

export function ContextSimple() {
  return (
    <Provider value={{ count: 0 }}>
      ContextSimple: <Button /> <Display />
    </Provider>
  );
}
