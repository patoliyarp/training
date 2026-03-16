import React from "react";
import { BlogContext } from "./BlogContext";

export default function BlogProvider({
  children,
}: {
  children: React.ReactNode;
}) {


    
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
}
