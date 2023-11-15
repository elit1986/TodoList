import React from 'react';
import TodoItem from './TodoItem';
import { TodosListProps } from '../types/todo-item-props.type.js';

const TodoList: React.FC<TodosListProps> = ({ todos, onDelete }) => {
  return (
    <div className="item-section">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
