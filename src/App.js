import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Students from "./Students";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
        </div>

    </div>
  );
}

export default App;
