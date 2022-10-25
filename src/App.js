import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TodoApp />}>
          <Route index element={<All />} />
          <Route path='active' element={<Active />} />
          <Route path='completed' element={<Completed />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
