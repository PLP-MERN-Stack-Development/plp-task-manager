import React, { useState, useEffect } from "react";
import Button from "./Button";

const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return { tasks, addTask, toggleTask, deleteTask };
};

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700 dark:text-green-400">
        Manage Your Tasks
      </h2>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
        />
        <Button type="submit" variant="primary">Add</Button>
      </form>

      {/* Filters */}
      <div className="flex justify-center gap-3 mb-6">
        {["all", "active", "completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 dark:scrollbar-thumb-green-600">
        {filteredTasks.length === 0 ? (
          <li className="text-center text-gray-500 dark:text-gray-400 py-4">
            ✨ No tasks found
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-gray-600 transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 rounded"
                />
                <span
                  className={`text-lg ${
                    task.completed
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                ✕
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Footer Stats */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        {tasks.filter((t) => !t.completed).length} task(s) remaining
      </div>
    </div>
  );
};

export default TaskManager;
