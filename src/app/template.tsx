"use client";
import Navigation from "@/components/Navigation";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold mt-4">Todo App</h1>
        <Navigation />
      </div>
      {children}
    </section>
  );
}
