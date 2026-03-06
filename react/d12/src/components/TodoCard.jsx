import { Plus, Circle, Trash2, CheckCircle2, Loader2 } from "lucide-react";
import { memo } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";

const TodoCard = memo(({ obj, ondelete, ToggleTodo }) => {
  const { deleteTodoLoading } = useSelector((state) => state.Todos);

  return (
    <div
      // key={obj.id}
      className="flex items-center justify-between bg-slate-800/60 border border-slate-700 px-5 py-4 rounded-2xl hover:border-indigo-500 shadow hover:shadow-indigo-700 group"
    >
      <div className="flex gap-2" onClick={() => ToggleTodo()}>
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
          {obj.todo}
        </span>
      </div>
      <div className="delete">
        <button
          onClick={async () => {
            await ondelete();
            toast.info("todo delete successfully");
          }}
          className="opacity-0  group-hover:opacity-100 text-center flex justify-center items-center text-slate-500 hover:text-red-500"
        >
          {/* {deleteTodoLoading == "pending" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : ( */}
          <Trash2 size={18} />
          {/* )} */}
        </button>
      </div>
    </div>
  );
});

export default TodoCard;
