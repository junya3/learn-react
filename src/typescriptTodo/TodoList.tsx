import React from 'react';
import { Todo } from '../TypeScriptTodo.tsx';

type TaskListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
