import UseFormStatusButton from "./UseFormStatusButton";

const UseFormStatusForm = () => {
  const myAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    console.log(newPost);
  };

  return (
    <div>
      <h1>UseFormStatusForm</h1>
      <form action={myAction}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter name"
            className="border-2"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter email"
            className="border-2"
          />
        </div>
        <UseFormStatusButton />
      </form>
    </div>
  );
};

export default UseFormStatusForm;
