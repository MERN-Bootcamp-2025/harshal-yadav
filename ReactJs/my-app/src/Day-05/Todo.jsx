import React, { useState } from 'react'
import TodoItem from './TodoItem'


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {

    e.preventDefault();
    if (text.trim() === '') return alert('Todo cannot be empty!');
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h3>To-Do APP</h3>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      <div className="footer">
        <span>Total: {todos.length}</span>
        <span>Completed: {todos.filter(t => t.completed).length}</span>
        <button onClick={clearCompleted}>Delete </button>
      </div>
    </div>

  )
}

export default Todo