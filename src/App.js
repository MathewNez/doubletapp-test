import Navbar from "./Navbar";
import Students from "./Students";
import SearchBar from "./SearchBar"
import SortList from "./SortList";
import Table from "./Table";
import {useEffect, useState} from "react";

function App() {


    const [students, setStudents] = useState([]);
    const [filteredData,setFilteredData] = useState(students);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect( () => {
    //     fetch("https://front-assignment-api.2tapp.cc/api/persons")
    //         .then(result => result.json())
    //         .then((parsed) => {
    //             setStudents(parsed.students);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect( () => {
        setTimeout(() => {
            fetch("https://front-assignment-api.2tapp.cc/api/persons")
                .then(result => result.json())
                .then((parsed) => {
                    setStudents(parsed.students);
                    setFilteredData(parsed.students);
                    setIsLoading(false);
                });
        }, 1000)}, []);


    const handleDelete = (id) => {
        const newStudents = students.filter((student) => student.id !== id);
        setStudents(newStudents);
        setFilteredData(newStudents);
    }

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result;
        result = students.filter((student) => {
            return student.name.toLowerCase().search(value) !== -1;
        });
        setFilteredData(result);
    }

  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
            <div className="container">
                <SearchBar handleSearch={handleSearch} />
                <SortList />
            </div>
            <Table students={filteredData} handleDelete={handleDelete} isLoading={isLoading}/>
        </div>
    </div>
  );
}

export default App;
