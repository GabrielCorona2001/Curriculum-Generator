import React from 'react';
import './App.css';
import BuilderWrapper from './components/builder/BuilderWrapper';
import ModelWrapper from './components/model/ModelWrapper';
import {ContextName, ContextNameProvider} from './contexts/Context'


export default function App() {
  return (
    <ContextNameProvider>
      <main>
        <BuilderWrapper />
        <ModelWrapper />
      </main>
      </ContextNameProvider>
  );
}