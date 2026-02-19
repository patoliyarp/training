import React, { useState, useMemo } from "react";
import { Trash2, CheckCircle2, Circle, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoListApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (!todo.trim()) return;

    setTodos([
      {
        id: Date.now(),
        text: todo,
        completed: false,
      },
      ...todos,
    ]);

    setTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((item) => !item.completed);
    }

    if (filter === "completed") {
      return todos.filter((item) => item.completed);
    }

    return todos;
  }, [todos, filter]);

  const completedCount = todos.filter((item) => item.completed).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8"
        >
          {/* Header */}
          <div className=" mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                TaskFlow
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Stay productive. {completedCount}/{todos.length} completed
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
              }}
              placeholder="What needs to be done?"
              className="flex-1 px-5 py-3 rounded-2xl bg-slate-800/60 text-white placeholder-slate-400 outline-none border border-slate-700 focus:border-indigo-500 transition"
            />

            <button
              onClick={addTodo}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/30 transition"
            >
              <Plus size={18} />
              Add
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6">
            {["all", "active", "completed"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition ${
                  filter === type
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Todo List */}
          <div className="space-y-3 max-h-100 overflow-y-auto pr-1">
            <AnimatePresence>
              {filteredTodos.map((item) => {
                console.log("this", item);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between bg-slate-800/60 border border-slate-700 px-5 py-4 rounded-2xl hover:border-indigo-500 transition group"
                  >
                    <div
                      onClick={() => toggleTodo(item.id)}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      {item.completed ? (
                        <CheckCircle2 className="text-indigo-500" size={22} />
                      ) : (
                        <Circle className="text-slate-500" size={22} />
                      )}

                      <span
                        className={`text-base transition ${
                          item.completed
                            ? "line-through text-slate-500"
                            : "text-white"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>

                    <button
                      onClick={() => removeTodo(item.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-500 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredTodos.length === 0 && (
              <p className="text-center text-slate-500 py-8">
                No tasks here ✨
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
