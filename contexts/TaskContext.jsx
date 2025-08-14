import { createContext, useState, useContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  finishTask: () => {},
  removeTask: () => {},
  clearTasks: () => {},
  getTaskById: () => {}
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const removeTask = (task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const finishTask = (task) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? {
              ...t,
              done: !t.done,
              dataConclusao: !t.done ? new Date().toLocaleString() : null
            }
          : t
      )
    );
  };

  const clearTasks = () => setTasks([]);

  const getTaskById = (id) => tasks.find((t) => t.id === id);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, finishTask, clearTasks, getTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
