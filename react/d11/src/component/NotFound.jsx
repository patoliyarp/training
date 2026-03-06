import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <main className="grid min-h-[80vh] place-items-center bg-primary px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary-text">404</p>
          <h1 className=" text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            not found
          </h1>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
