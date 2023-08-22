"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../Input";
import { addTodo } from "@/services/addTodo";

const AddTodoForm = () => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    setValue(inputEvent.target.value);
  };

  const handleSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    addTodo(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[10px] mb-[20px] mt-[20px]"
    >
      <Input value={value} handleInputChange={handleInputChange} />
      <button
        className="px-4 py-2 border rounded-md  hover:bg-gray-600 max-w-[130px]"
        type="submit"
      >
        <p className="hover:scale-105 transition-all duration-500">Add Todo</p>
      </button>
    </form>
  );
};

export default AddTodoForm;
