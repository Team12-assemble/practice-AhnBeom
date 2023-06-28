import React from "react";
import useForm from "./custom-hooks/useForm";

export default function Form() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={values.password}
        />
        <button type="submit">로그인</button>
      </form>
      <button onClick={resetForm}>초기화</button>
    </>
  );
}
