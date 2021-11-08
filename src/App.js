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
    const [filters, setFilters] = useState( {
        query: '',
        sort: '',
    });

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

    const compareFn = (a, b, sign) => {
        if (a > b)
            return -1 * sign;
        if (a < b)
            return 1 * sign;
        return 0;
    }

    const calculateAge = (dob) => {
        let today = new Date();
        let diff_ms = today.getFullYear() - dob.getFullYear();
        return Math.abs(diff_ms);
    }

    useEffect(() => {
        let filteredStudents = students.filter((student) => {
            return student.name.toLowerCase().search(filters.query) !== -1;
        });

        switch (filters.sort) {
            case 'Имя А-Я':
                filteredStudents.sort((student1, student2) => compareFn(student1.name, student2.name, -1));
                break;
            case 'Имя Я-А':
                filteredStudents.sort((student1, student2) => compareFn(student1.name, student2.name, 1));
                break;
            case 'Сначала моложе':
                filteredStudents.sort((student1, student2) => compareFn(calculateAge(new Date(student1.birthday)), calculateAge(new Date(student2.birthday)), -1));
                break;
            case 'Сначала старше':
                filteredStudents.sort((student1, student2) => compareFn(calculateAge(new Date(student1.birthday)), calculateAge(new Date(student2.birthday)), 1));
                break;
            case 'Высокий рейтинг':
                filteredStudents.sort((student1, student2) => compareFn(student1.rating, student2.rating, 1));
                break;
            case 'Низкий рейтинг':
                filteredStudents.sort((student1, student2) => compareFn(student1.rating, student2.rating, -1));
                break;
            default:
                break;
        }
        setFilteredData(filteredStudents);
    }, [students, filters])


    const handleDelete = (id) => {
        const newStudents = students.filter((student) => student.id !== id);
        setStudents(newStudents);
        setFilteredData(newStudents);
    }

  return (
    <div className="App">
      <Navbar />
        <div className="content">
            <Students />
            <div className="container">
                <SearchBar filters={filters} setFilters={setFilters} />
                <SortList filters={filters} setFilters={setFilters}/>
            </div>
            <Table students={filteredData} handleDelete={handleDelete} isLoading={isLoading} calculateAge={calculateAge}/>
        </div>
    </div>
  );
}

export default App;
