import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Router/Routes";
import "flowbite";

function App() {
  return (
    <div className="dark:bg-slate-700 w-[100vw] h-[100vh]">
      <Routes></Routes>
    </div>
  );
}

export default App;
