import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8080/api/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const createTask = async (task) => {
    await fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const updateTask = async (id, task) => {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    fetchTasks();
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-center mb-8">Task Manager</h1>
        {editingTask ? (
          <TaskForm
            task={editingTask}
            onSave={(task) => updateTask(editingTask.id, task)}
            onCancel={() => setEditingTask(null)}
          />
        ) : (
          <TaskForm
            onSave={(task) => createTask(task)}
            onCancel={() => setEditingTask(null)}
          />
        )}
        <TaskList
          tasks={tasks}
          onEdit={(task) => setEditingTask(task)}
          onDelete={(id) => deleteTask(id)}
        />
      </div>
    </div>
  );
};

export default App;

