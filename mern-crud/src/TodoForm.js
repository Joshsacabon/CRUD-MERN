import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "", description: todo ? todo.description : ""  },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          {...register("text")}
          type="text"
          id="text"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control"
          {...register("description")}
          type="description"
          id="description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Todo
        </button>
        </div>
      </form>
  );
};
