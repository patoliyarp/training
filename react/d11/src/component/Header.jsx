import { Menu, Github, Search, Moon, Sun } from "lucide-react";
import Input from "./Input.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="h-16  dark:bg-primary border-b border-primary-200 shadow-sm shadow-primary-200  p-4">
        {/* logo section  */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <h1 className="hidden sm:block text-2x dark:text-white text-[14px] font-medium ">
                Dashboard
              </h1>
            </Link>
          </div>

          {/* input and profile section  */}
          <div className="flex justify-center items-center gap-1 sm:gap-6 mr-2.5">
            {/* input section  */}
            <Input />
          </div>
        </div>
      </header>
    </>
  );
}
