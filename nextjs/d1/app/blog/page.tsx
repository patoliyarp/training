// import { userAgent } from "next/server";
// import {}
// export async function getServerSideProps() {
//   const res = await fetch("https://dummyjson.com/user/1");
//   const user = await res.json();
//   return {
//     props: {
//       user,
//     },
//   };
// }

export default function blog() {
  return <h1>blog:user </h1>;
}
