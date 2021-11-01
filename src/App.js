import logo from './logo.svg';
import Navbar from "./Navbar";
import Students from "./Students";
import SearchBar from "./SearchBar"

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
            <SearchBar />
        </div>

    </div>
  );
}

export default App;
