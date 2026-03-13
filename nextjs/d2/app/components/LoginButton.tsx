import Image from "next/image";

export default function Login() {
  const isLogin = false;
  return isLogin ? (
    <div className="rounded-full h-8 w-8 overflow-hidden">
      <Image
        src="https://avatars.githubusercontent.com/u/255820632?v=4&size=64"
        alt="profile pic"
      />
    </div>
  ) : (
    <button className="text-black bg-btn px-4 border  border-transparent hover:border-primary-100  py-2 rounded-xl text-sm">
      Login
    </button>
  );
}
