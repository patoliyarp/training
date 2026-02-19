import { Plus, Circle, Trash2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Todo_List() {
  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "complete todo app",
      complete: false,
    },
  ]);

  //   function ToggleComplete(id) {
  //     setTodos((prev) =>
  //       prev.map((obj) =>
  //         obj.id == id ? { ...obj, complete: !obj.complete } : { obj },
  //       ),
  //     );
  //   }

  function ToggleComplete(id) {
    setTodos((prev) =>
      prev.map((obj) => {
        if (obj.id == id) {
          return { ...obj, complete: !obj.complete };
        } else {
          return { ...obj };
        }
      }),
    );
  }

  function addTodo() {
    if (!todo.trim()) return;

    setTodos((prev) => [
      { id: Date.now(), text: todo, complete: false },
      ...prev,
    ]);
    setTodo("");
    console.log("todo", todos);
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todos) => todos.id != id));
  }

  const filtered = todos.filter((obj) => {
    if (filter == "all") {
      return todos;
    }
    if (filter == "active") {
      return obj.complete != true;
    }
    if (filter == "completed") {
      return obj.complete != false;
    }
  });

  const completedTodo = todos.filter((obj) => obj.complete);

  return (
    <div className="min-h-screen  bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex justify-center items-center">
      <div className="w-full max-w-2xl border mx-auto p-8 backdrop-blur-xl bg-white/5 border-white/10 rounded-2xl ">
        {/* header */}
        <div className="mb-6">
          <h1 className="text-4xl font-semibold mb-2">Task Flow</h1>
          <p className="text-sm text-slate-400">
            stay productive.{completedTodo.length || 0}/{todos.length} complete
          </p>
        </div>
        {/* input box  */}
        <div className="flex gap-2 mb-6">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") addTodo();
            }}
            type="text"
            name="todo"
            id="todo"
            placeholder="What need to be done?"
            className="border border-slate-700 px-5 py-3 text-white placeholder-slate-400 outline-none focus:border-indigo-500 rounded-2xl flex-1 shadow shadow- shadow-indigo-800"
          />
          <button
            onClick={() => addTodo()}
            className="flex cursor-pointer items-center gap-2 px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/30 transition"
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        {/* filters */}
        <div className="flex gap-2 mb-6 ">
          {["all", "active", "completed"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition ${
                filter === btn
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* todos */}
        <div className="space-y-3 max-h-100 overflow-y-auto">
          {filtered.map((obj) => (
            <div
              key={obj.id}
              className="flex items-center justify-between bg-slate-800/60 border border-slate-700 px-5 py-4 rounded-2xl hover:border-indigo-500 shadow hover:shadow-indigo-700 group"
            >
              <div
                className="flex gap-2"
                onClick={() => ToggleComplete(obj.id)}
              >
                {obj.complete ? (
                  <CheckCircle2 className="text-indigo-500" size={22} />
                ) : (
                  <Circle size={22} className="text-slate-500" />
                )}

                <span
                  className={`${
                    obj.complete ? "line-through text-slate-500" : "text-white"
                  }`}
                >
                  {obj.text}
                </span>
              </div>
              <div className="delete">
                <button
                  onClick={() => deleteTodo(obj.id)}
                  className="opacity-0 group-hover:opacity-100 text-center flex justify-center items-center text-slate-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          {filtered.length == 0 && (
            <p className="text-center text-slate-500 py-8">No tasks here ✨</p>
          )}
        </div>
      </div>
    </div>
  );
}
