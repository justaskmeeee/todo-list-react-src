import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TodoApp from './components/TodoApp/TodoApp';
import TodoItemsFilter from './components/TodoItemsFilter/TodoItemsFilter';
import { changeFilter } from './store/slices/todoSlice';
import s from './styles/global.module.scss';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    dispatch(changeFilter(pathname));
  }, [location.pathname]);

  return (
    <div className={s.App}>
      <Routes>
        <Route path='/' element={<TodoApp />}>
          <Route index element={<TodoItemsFilter />} />
          <Route path='active' element={<TodoItemsFilter />} />
          <Route path='completed' element={<TodoItemsFilter />} />
          <Route path='*' element={<Navigate to='/'  replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
