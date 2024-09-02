import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [category, setCategory] = useState(task ? task.category : '');
  const [completed, setCompleted] = useState(task ? task.completed : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate, category, completed });
  };

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setCategory(task.category);
      setCompleted(task.completed);
    }
  }, [task]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-800 rounded-lg text-white">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-200"
      />
      <label className="flex items-center text-gray-200">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className="mr-2"
        />
        Completed
      </label>
      <button type="submit" className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600">Save</button>
      <button type="button" onClick={onCancel} className="bg-red-500 p-2 rounded text-white hover:bg-red-600">Cancel</button>
    </form>
  );
};

export default TaskForm;

