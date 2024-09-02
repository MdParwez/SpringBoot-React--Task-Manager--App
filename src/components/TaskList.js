import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h2 className="text-2xl text-white mb-4">Task List</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="p-4 bg-gray-600 rounded-lg text-white">
            <h3 className="text-xl">{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleString()}</p>
            <p>Category: {task.category}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <button onClick={() => onEdit(task)} className="bg-blue-500 p-2 rounded text-white mr-2">Edit</button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 p-2 rounded text-white">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
