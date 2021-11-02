import DeleteButton from "./DeleteButton";
import logo from "./logo.svg"
import {useEffect, useState} from "react";

const Table = () => {

    const calculate_age = (dob) => {
        let today = new Date();
        let diff_ms = today.getFullYear() - dob.getFullYear();
        return Math.abs(diff_ms);
    }

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
                {students.map((student) => {
                    return(
                        <tr key={student.id}>
                            <td><img src={student.avatar} alt={logo} className="avatar"/></td>
                            <td>{student.name}</td>
                            <td>{student.specialty}</td>
                            <td>{student.group}</td>
                            <td>{calculate_age(new Date(student.birthday))}</td>
                            <td>{student.rating}</td>
                            <td><span style={{backgroundColor: student.color, width: "30px", height: "30px", display: "inline-block", borderRadius: "50%"}}/></td>
                            <td><DeleteButton /></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;