import { ModeToggle } from "./components/mode-toggle";
import "./global.css";

function App() {
  return (
    <div className="bg-color w-90 h-150 p-4 bg-gray-color">
      <button className="text-color">Switch to "light" : "dark"</button>
      <ModeToggle />
    </div>
  );
}

export default App;
