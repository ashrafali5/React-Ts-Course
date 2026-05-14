import { useRef, useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current?.value || ""; // when ? if string give value else undefined ! forcing to trust that value is not null or undefined
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <hr />
        <div style={{ margin: "2rem", display: "flex", gap: "1rem" }}>
          <input type="text" placeholder="Enter your name" ref={name} />
          <input type="email" placeholder="Enter your email" ref={email} />
          <input type="password" placeholder="Enter password" ref={password} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <section style={{ margin: "32px" }}>
        <ul>
          <li>Name : {submittedData.name}</li>
          <li>Email : {submittedData.email}</li>
          <li>Password : {submittedData.password}</li>
        </ul>
      </section>
    </div>
  );
};

export default Form;
