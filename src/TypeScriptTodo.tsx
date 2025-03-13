import React, { useState } from 'react';
import TodoList from './typescriptTodo/TodoList.tsx';

export type Todo = {
  id: number;
  text: string;
};

const TypeScriptTodo = ({ title }) => {
  const [inputText, setInputText] = useState('');
  const [todo, setTodos] = useState<Todo[]>([
    { id: 0, text: 'Todo' },
    { id: 1, text: 'Todo2' },
  ]);
  const addTodoItem = () => {
    const trimmedText = inputText.trim();
    if (trimmedText === '') return;
    setTodos((prev) => [...prev, { id: prev.length, text: trimmedText }]);
    setInputText('');
  };

  return (
    <>
      <div className='container'>
        <h2>{title}</h2>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodoItem}>追加</button>
        <TodoList todos={todo} />
      </div>
    </>
  );
};

export default TypeScriptTodo;
