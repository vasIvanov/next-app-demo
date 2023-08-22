import Form from "@/components/Form";
import { getTodos } from "@/services/getTodos";

export default async function AboutUs() {
  const data = await getTodos();

  return (
    <main className="">
      <h1>Add Todo</h1>
      <p>TODOS: {data.length}</p>
      <Form />
    </main>
  );
}
