import React from 'react';
import { RecoilAsync } from './RecoilAsync';
import { ContextSimple } from './ContextSimple';
import { RecoilSimple } from './RecoilSimple';
import { TinyContextSimple } from './TinyContextSimple';
import { CodePreviewer } from './CodePreviewer';

export const App = () => (
  <>
    <div>trial recoil</div>
    <hr />
    <RecoilSimple />
    <CodePreviewer name="RecoilSimple.tsx" code={require('!!raw-loader!./RecoilSimple.tsx').default} />
    <hr />
    <ContextSimple />
    <CodePreviewer name="ContextSimple.tsx" code={require('!!raw-loader!./ContextSimple.tsx').default} />
    <hr />
    <TinyContextSimple />
    <CodePreviewer name="TinyContextSimple.tsx" code={require('!!raw-loader!./TinyContextSimple.tsx').default} />
    <hr />
    <RecoilAsync />
    <CodePreviewer name="RecoilAsync.tsx" code={require('!!raw-loader!./RecoilAsync.tsx').default} />
  </>
);
