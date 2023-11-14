import React from 'react';
import { TodoItemProps } from '../types/todo-item-props.type.js';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onSelect }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        onChange={(e) => onSelect(todo.id, e.target.checked)}
      />
      <span>{todo.title}</span>
    </div>
  );
};

export default TodoItem;
