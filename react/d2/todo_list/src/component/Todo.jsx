import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
// import todoLogo from "../assets/to-do-logo.png";

const TodoList = () => {
  const todoList = [
    { id: 1, title: "Walking" },
    { id: 2, title: "Coding" },
    { id: 3, title: "Meditation" },
    { id: 4, title: "Running" },
    { id: 5, title: "Light Bill" },
    { id: 6, title: "Fix Bug" },
  ];

  const [todoInput, setTodosInput] = useState("");
  const [todos, setTodos] = useState(todoList);
  const [message, setMessage] = useState({ type: null, value: null });

  const inputHandler = (e) => {
    const value = e.target.value;
    setTodosInput(value);
    if (message.type !== null) {
      setMessage({ type: null, value: null });
    }
  };

  const handleDelete = (todoId) => {
    setTodos((prev) => prev.filter(({ id }) => id !== todoId));
    setMessage({ type: "delete", value: "Todo Deleted Successfully" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoInput.trim() === "" || !isNaN(Number(todoInput))) {
      setMessage({ type: "error", value: "Please add todo" });
    } else {
      const todo = { id: Date.now(), title: todoInput };

      setTodos((prev) => [todo, ...prev]);
      setTodosInput("");
      setMessage({ type: "message", value: "Todo added successfully." });
    }
  };

  return (
    <div className="p-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] shadow-md bg-sky-50 rounded-xl hover:shadow-2xl">
      <div className="flex justify-center text-slate-200 bg-sky-500 p-2 rounded-md m-3 shadow-md space-x-2">
        <h1 className="text-2xl">To-Do List</h1>
        <img
        //   src="https://picsum.photos/50"
          alt="todo list logo"
          className="inline-block animate-bounce"
        />
      </div>
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="w-[95%] sm:w-[90%] lg:w-[85%]">
          <form
            onSubmit={submitHandler}
            className="flex items-center justify-between w-full shadow-md p-5 rounded-md"
          >
            <input
              className={`shadow-md rounded-md p-2 w-full me-3 transition-all duration-300 ease-in hover:scale-99 ${message.type === "error" && "bg-red-300"}  focus:bg-slate-200 outline-none`}
              value={todoInput}
              placeholder="Add New Todo"
              onChange={inputHandler}
            />
            <button className="bg-sky-500 text-2xl p-2 rounded-full text-slate-100 cursor-pointer transition-all duration-200 ease-out hover:bg-sky-700 hover:scale-95">
              <IoMdAddCircle />
            </button>
          </form>
          {(message.type === "message" || message.type === "error") && (
            <div
              className={`text-left shadow-md rounded-md mt-2 p-2 ${message.type == "message" && "bg-green-200"} ${message.type == "error" && "bg-red-200"}`}
            >
              <p
                className={`${message.type == "message" && "text-green-500"} ${message.type == "error" && "text-red-500"}`}
              >
                {message.value}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] sm:w-[90%] lg:w-[85%] rounded-md shadow-md">
          {message.type == "delete" && (
            <div
              className={`text-left shadow-md rounded-md mt-2 p-2 w-full ${message.type == "delete" && "bg-green-200"}`}
            >
              <p className={`${message.type == "delete" && "text-green-500"}`}>
                {message.value}
              </p>
            </div>
          )}

          {todos.length === 0 && (
            <div
              className={`text-sky-700 shadow-md rounded-md mt-2 p-2 w-full bg-sky-200`}
            >
              <p className={`text-center `}>Please Add At Least One Todo.</p>
            </div>
          )}

          {todos.length > 0 && (
            <ul className="overflow-auto h-90 space-y-3 p-4">
              {todos.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className="p-2 rounded-md transition-all duration-100 ease-initial trans hover:cursor-pointer hover:bg-slate-200 shadow-lg"
                  >
                    <div className="flex items-center justify-between space-x-3">
                      <p>{title}</p>
                      <button
                        className="bg-red-500 p-2 rounded-full cursor-pointer text-slate-200 text-sm transition-all delay-50 ease-in hover:bg-red-600 hover:scale-95"
                        onClick={() => handleDelete(id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoList;