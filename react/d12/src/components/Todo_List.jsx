import {
  Plus,
  Circle,
  Trash2,
  CheckCircle2,
  CloudCog,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  fetchUser,
  AddUser,
  DeleteUser,
  UpdateUser,
} from "../redux/slices/TodoSlice.js";
import { v4 as uid } from "uuid";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import TodoCard from "./TodoCard.jsx";

export default function Todo_List() {
  const { todos, fetchTodosLoading, addTodoLoading } = useSelector(
    (state) => state.Todos,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState("");

  async function addTodo(e) {
    if (e) e.preventDefault();
    try {
      if (!todo.trim()) return;
      const data = {
        todo,
        completed: false,
        userId: Math.floor(Math.random() + Math.random() * 100 + 1),
      };
      const Added = await dispatch(AddUser(data));
      setTodo("");
      toast.success("todo add successfully");
      console.log("data :>> ", Added);
    } catch (error) {
      console.error("error while add todo", error);
      throw new Error("error while add todo:", error);
    }
    console.log("todo", todos);
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

  function toggleTodo() {}

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
          {/* onClick={() => addTodo()} */}
          <form action="" className="flex grow" onSubmit={(e) => addTodo(e)}>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") addTodo(e);
              }}
              type="text"
              name="todo"
              id="todo"
              placeholder="What need to be done?"
              className="border border-slate-700 px-5 py-3 text-white placeholder-slate-400 outline-none focus:border-indigo-500 rounded-2xl flex-1 shadow shadow- shadow-indigo-800"
            />
            <button
              type="submit"
              className="flex cursor-pointer items-center gap-2 px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/30 transition"
            >
              {addTodoLoading == "pending" ? (
                <p className="text-center ">Loading...</p>
              ) : (
                <>
                  <Plus size={18} />
                  Add
                </>
              )}
            </button>
          </form>
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
            <TodoCard
              key={obj.userId}
              obj={obj}
              // ondelete={dispatch(DeleteUser(obj.userId))}
              ToggleTodo={() => {
                return dispatch(UpdateUser(obj.userId, !obj.completed));
              }}
              ondelete={() => {
                console.log("obj.userId :>> ", obj.userId);
                return dispatch(DeleteUser(obj.userId));
              }}
            />
          ))}
          {fetchTodosLoading == "pending" && (
            <p className="text-center text-slate-500 py-8">Loading ...</p>
          )}
          {filtered.length == 0 && fetchTodosLoading == "success" && (
            <p className="text-center text-slate-500 py-8">No tasks here ✨</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
