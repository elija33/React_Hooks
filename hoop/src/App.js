import React, { Component } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import DataFetching from './components/DataFetching'
import HookCounter from './components/HookCounter'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import HookCounterThree from './components/HookCounterThree'
import HookCounterTwo from './components/HookCounterTwo'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import MouseContainer from './components/MouseContainer'

function App() {
  return (
    <div className="App">
     {/* <ClassCounter /> 
     <HookCounter />
     <HookCounterTwo />
     <HookCounterThree />
     <HookCounterFour />
     <HookCounterOne />
     <HookMouse />
     <MouseContainer />
     <IntervalHookCounter />
     <DataFetching />
     <CounterOne />*/}
     <CounterTwo />
    </div>
  )
}

export default App
