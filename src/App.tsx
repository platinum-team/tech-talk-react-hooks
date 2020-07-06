import React from 'react';
import './App.css';
import { TextInputWithFocusButton } from './hooks/use-ref-hook/TextInputWithFocusButton';
import { Histograms } from './hooks/use-memo-callback-hooks/Histograms';
import { Counter as Counter1 } from './hooks/use-reducer-hook/Counter';
import { PreferencesDisplay } from './hooks/use-context-hook/PreferencesDisplay';
import { Card } from './functional-component-with-children/Card';
import { Counter as Counter2 } from './hooks/use-state-hook/Counter2';
import { UserForm } from './hooks/use-effect-hook/UserForm';

function App() {
  return (
    <div className="App">
      <Card title="Welcome!" paragraph="To Platinum TechTalk!" >
        <p>You look so cool today!</p>
        <Counter2 clicks={0} info={"time(s) clicked"}></Counter2>
      </Card>
        <UserForm></UserForm>
        <PreferencesDisplay></PreferencesDisplay>
        <TextInputWithFocusButton></TextInputWithFocusButton>
        <Histograms></Histograms>
        <Counter1></Counter1>
    </div>
  );
}

export default App;
