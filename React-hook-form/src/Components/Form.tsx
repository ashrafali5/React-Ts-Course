import { useForm, type SubmitHandler } from "react-hook-form";

//! register: is used to connect input fields to the form
//! handleSubmit: is a function to handle form submission
//! errors: contains validation errors for the form

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", { required: "Name is required!!" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && (
          <p style={{ color: "green" }}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Characters must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "blue" }}>{errors.password.message}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
