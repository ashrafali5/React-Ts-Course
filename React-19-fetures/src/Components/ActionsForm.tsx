const ActionsForm = () => {
  const formAction = (formData: any) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
  };

  return (
    <form action={formAction}>
      <h1>ActionsForm</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border-2 border-black rounded"
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="border-2 border-black rounded"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="border-2 border-black rounded"
      />
      <br />
      <button type="submit" className="bg-gray-900 text-white px-5 py-1 mt-5">
        Submit
      </button>
    </form>
  );
};

export default ActionsForm;
