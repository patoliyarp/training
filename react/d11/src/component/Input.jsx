import { useEffect, useState, useCallback, useRef } from "react";
import { Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, setSearchQuery } from "../redux/slices/userSlice";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
}

export default function Input() {
  const dispatch = useDispatch();
  const savedQuery = useSelector((state) => state.user.searchQuery);
  const [SearchVal, setSearchVal] = useState(savedQuery);
  const debouncedQuery = useDebounce(SearchVal, 600);
  const isFirstRender = useRef(true);


  const handleInputChange = useCallback(
    (event) => {
      const newValue = event.target.value;
      setSearchVal(newValue);
      dispatch(setSearchQuery(newValue));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (savedQuery === debouncedQuery && savedQuery !== "") {
        return;
      }
    }

    dispatch(fetchUser(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return (
    <div className="relative">
      <input
        value={SearchVal}
        onChange={handleInputChange}
        placeholder="Search users..."
        type="text"
        className="border w-40 sm:w-60 focus:border-slate-500 outline-none border-slate-600 rounded-sm ring-slate-800 px-6 dark:text-white font-light "
      />
      <Search
        size={16}
        className="text-slate-600 absolute top-1.25 left-1.5 font-medium"
      />
    </div>
  );
}
