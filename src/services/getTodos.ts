export async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      next: { tags: ["todos"] },
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
