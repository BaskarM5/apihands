
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(1); 
  const [todos, setTodos] = useState([]);   

  const temp = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${count}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTodos(prevTodos => [...prevTodos, data]);
        setCount(count + 1);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>BAS</h1>
      </header>
      
      <div className="div">
        <button onClick={temp}>CLICK TO CALL API</button>
      </div>
      
      <div className="res">
        {todos.length > 0 ? (
          todos.map((todo) => ( 
            <div key={todo.id} className="todo-item">
              <h2>FETCHED DATA:</h2>
              <h3>ID: {todo.id}</h3> 
              <h3>NAME:{todo.username}</h3>
              <h3>email: {todo.email}</h3>
              <h3>phone: {todo.phone}</h3>
              <h3>website: {todo.website}</h3>
              <br/>
            </div>
          ))
        ) : (
          <h3>No data fetched yet</h3>
        )}
      </div>
      
      <div className="time">
        NO OF TIMES CALLED: {count}
      </div>
    </div>
  );
}

export default App;
