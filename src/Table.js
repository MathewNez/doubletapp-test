import {useEffect, useState} from "react";
import StudentsList from "./StudentsList";

const Table = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {fetchData();}, []);
    const fetchData = async () => {
        const response = await fetch("https://front-assignment-api.2tapp.cc/api/persons");
        const parsed = await response.json();
        setStudents(parsed.students);
    }

    return(
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
            <tbody>
               <StudentsList students={students} />
            </tbody>
        </table>
    );
}

export default Table;