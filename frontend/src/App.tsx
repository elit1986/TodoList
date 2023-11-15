import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './types/todo-item-props.type.js';
import { getTasks, addTask, deleteTask } from './apis/taskApi.js';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTodos(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleAddTodo = async (title: string) => {
    try {
      const newTodo = await addTask({ title });
      if (newTodo) {
        setTodos([...todos, newTodo]);
      }
    } catch (error) {
      console.error('Error adding new todo:', error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTask(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
