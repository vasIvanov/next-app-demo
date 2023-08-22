"use server";

import { revalidateTag } from "next/cache";

export async function addTodo(body: string) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (res.ok) {
      revalidateTag("todos");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
