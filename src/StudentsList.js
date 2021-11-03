import logo from "./logo.svg";
import DeleteButton from "./DeleteButton";

const StudentsList = (props) => {
    const students = props.students;

    const calculate_age = (dob) => {
        let today = new Date();
        let diff_ms = today.getFullYear() - dob.getFullYear();
        return Math.abs(diff_ms);
    }

    return(
        students.map((student) => {
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
        })
    );
}

export default StudentsList;