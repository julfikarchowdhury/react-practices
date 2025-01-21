import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const ReactFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            {...register("firstName", {
              required: true,
              minLength: {
                value: 2,
                message: "Minimum leangth should be atleast 2 character",
              },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            {...register("lastName", {
              required: true,
              minLength: {
                value: 2,
                message: "Minimum leangth should be atleast 2 character",
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
     
        <br />
        <button type="submit">Submit</button>
      </form>
      <NavLink to={'calculator'}>Calculator</NavLink>
    </div>
  );
};

export default ReactFormHook;
