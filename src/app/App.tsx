import React from 'react';
import '../styles/App.css';
import TodoList from "../components/todoList";

function App() {
  return (
    <div className="App">
        <main>
            <TodoList />
        </main>
    </div>
  );
}

export default App;
