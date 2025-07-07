import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

function filterTasks(tasks, filter) {
  if (filter === "active") return tasks.filter((t) => !t.completed);
  if (filter === "completed") return tasks.filter((t) => t.completed);
  return tasks;
}

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = filterTasks(tasks, filter);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </form>
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 dark:text-gray-400 text-center">No tasks found.</li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded px-3 py-2"
          >
            <label className="flex items-center gap-2 flex-1 cursor-pointer">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="accent-blue-600 w-4 h-4"
              />
              <span className={task.completed ? "line-through text-gray-400" : ""}>
                {task.text}
              </span>
            </label>
            <Button
              variant="danger"
              className="ml-2 px-2 py-1 text-sm"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
