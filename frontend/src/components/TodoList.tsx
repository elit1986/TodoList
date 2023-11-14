import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TodosListProps } from '../types/todo-item-props.type.js';

const TodoList: React.FC<TodosListProps> = ({ todos, onUpdate, onDelete }) => {
  const [selectedTodos, setSelectedTodos] = useState(new Set<string>());
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleSelect = (id: string, isChecked: boolean) => {
    setSelectedTodos((prev) => {
      const newSelected = new Set(prev);
      if (isChecked) newSelected.add(id);
      else newSelected.delete(id);
      return newSelected;
    });
  };

  const handleDelete = () => {
    selectedTodos.forEach((id) => onDelete(id));
    setSelectedTodos(new Set());
  };

  const handleEdit = () => {
    if (selectedTodos.size === 1) {
      setIsEditing(true);
      const selectedId = Array.from(selectedTodos)[0];
      const selectedTodo = todos.find((todo) => todo.id === selectedId);
      setNewTitle(selectedTodo?.title || '');
    }
  };

  const handleUpdate = () => {
    const selectedId = Array.from(selectedTodos)[0];
    console.log(selectedTodos);
    console.log('Selected id:', selectedId);
    onUpdate(selectedId, newTitle);
    setIsEditing(false);
    setSelectedTodos(new Set());
  };

  return (
    <div className="item-section">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>
            <span>Updatd</span>
          </button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>
            <span>Edit</span>
          </button>
          <button onClick={handleDelete}>
            <span>Delete</span>
          </button>
          {todos.length === 0 ? (
            <p>No todos found</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="item">
                <TodoItem todo={todo} onSelect={handleSelect} />
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default TodoList;
