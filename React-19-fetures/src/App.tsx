// import { Suspense } from "react";
// import FetchingTodo from "./Components/FetchingTodo";
// import UseFormStatusForm from "./Components/UseFormStatusForm";
// import ActionsForm from "./Components/ActionsForm";

import { useState, useTransition } from "react";
import Home from "./Components/useTransitionHook/Home";
import Post from "./Components/useTransitionHook/Post";
import Contact from "./Components/useTransitionHook/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "post":
        return <Post />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleTabChange = (tab: any) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <FetchingTodo />
      </Suspense> */}
      {/* <ActionsForm /> */}
      {/* <UseFormStatusForm /> */}

      <div className="tabs">
        <button
          className="border-2 border-gray-200 ml-5 px-4 py-2 cursor-pointer"
          onClick={() => handleTabChange("home")}
        >
          Home
        </button>
        <button
          className="border-2 border-gray-200 ml-5 px-4 py-2 cursor-pointer"
          onClick={() => handleTabChange("contact")}
        >
          Contact
        </button>
        <button
          className="border-2 border-gray-200 ml-5 px-4 py-2 cursor-pointer"
          onClick={() => handleTabChange("post")}
        >
          Post
        </button>
        {isPending && <h1>Loading...</h1>}
        <div className="content"> {renderContent()} </div>
      </div>
    </div>
  );
};

export default App;
