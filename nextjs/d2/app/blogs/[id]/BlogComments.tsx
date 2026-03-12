"use client";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export function BlogComment() {

    const {data,error,isLoading}=useSWR("")
  return (
    <>
      <h1>this is blog card</h1>
    </>
  );
}
