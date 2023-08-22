"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-black flex flex-col md:flex-row">
      <Link
        className={`px-8 py-4 flex-grow ${
          pathname === "/" ? " bg-black text-white" : "bg-gray-100 text-black"
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`md:border-l px-8 py-4 ${
          pathname === "/add-todo"
            ? " bg-black text-white"
            : "bg-gray-100 text-black"
        }`}
        href="/add-todo"
      >
        Add Todo
      </Link>
    </div>
  );
};
export default Navigation;
