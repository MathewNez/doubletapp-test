import Navbar from "./Navbar";
import Students from "./Students";
import SearchBar from "./SearchBar"
import SortList from "./SortList";
import Table from "./Table";
import {useEffect, useState} from "react";

function App() {


    const [students, setStudents] = useState([]);
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
                    setIsLoading(false);
                });
        }, 1000)}, []);


    const handleDelete = (id) => {
        const newStudents = students.filter((student) => student.id !== id);
        setStudents(newStudents);
    }

  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
            <div className="container">
                <SearchBar />
                <SortList />
            </div>
            <Table students={students} handleDelete={handleDelete} isLoading={isLoading}/>
        </div>
    </div>
  );
}

export default App;
