import Navigation from "./Components/Navigation";
import PeopleToFollow from "./Components/PeopleToFollow";

const App = () => {
  return (
    <div>
      <Navigation />

      <div className="flex justify-center">
        {/* Main area */}
        <div className="w-1/3">
          <PeopleToFollow />
        </div>
      </div>
    </div>
  );
};

export default App;
