import React, { useState } from 'react';
import './index.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, {
      text: task,
      done: false,
      createdAt: new Date()
    }]);
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#3b82f6',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        📅 <span>My Task Planner</span>
      </h1>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            flex: 1
          }}
        />
        <button
          onClick={addTask}
          style={{
            backgroundColor: '#3b82f6',
            color: '#fff',
            padding: '0.75rem 1.25rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ width: '100%', maxWidth: '400px', padding: 0, listStyle: 'none' }}>
        {tasks.map((t, i) => (
          <li key={i} style={{
            backgroundColor: '#fff',
            padding: '1rem',
            marginBottom: '0.75rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span
                onClick={() => toggleDone(i)}
                style={{
                  textDecoration: t.done ? 'line-through' : 'none',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {t.text}
              </span>
              <button
                onClick={() => removeTask(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
            <span style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              marginTop: '0.5rem'
            }}>
              Added at {new Date(t.createdAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
