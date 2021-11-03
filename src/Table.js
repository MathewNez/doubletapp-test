import {useEffect, useState} from "react";
import StudentsList from "./StudentsList";
import Loader from "./Loader";

const Table = () => {

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
        <div>
            {
            <table>
                <colgroup>
                    <col span="1" style={{width: '80px'}}/>
                    <col span="1" style={{width: '341px'}}/>
                    <col span="1" style={{width: '320px'}}/>
                    <col span="1" style={{width: '160px', padding: '0 0 60px 0'}}/>
                    <col span="1" style={{width: '200px', padding: '0 0 60px 0'}}/>
                    <col span="1" style={{width: '162px'}}/>
                    <col span="1" style={{width: '82px'}}/>
                    <col span="1" style={{width: '68px'}}/>
                </colgroup>
                <thead>
                <tr>
                    <th/>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                </tr>
                </thead>
                {isLoading && <Loader />}
                <tbody>
                <StudentsList students={students} handleDelete={handleDelete}/>
                </tbody>
            </table>
            }
        </div>
    );
}

export default Table;