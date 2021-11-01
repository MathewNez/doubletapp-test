import logo from './logo.svg';
import Navbar from "./Navbar";
import Students from "./Students";
import SearchBar from "./SearchBar"
import SortList from "./SortList";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
            <div className="container">
                <SearchBar />
                <SortList />
            </div>
        </div>

    </div>
  );
}

export default App;
