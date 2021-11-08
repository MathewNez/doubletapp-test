import trashcan from "./trashcan.png";
import star from "./star.png"

const StudentsListMobile = ({students, handleDelete, calculateAge}) => {
    return(
        students.map(student => {
            return(
                <div className="student-card">
                    <div className="top-part row">
                        <img src={student.avatar} className="avatar-mobile"/>
                        <div className="info">
                            <p>{student.name}</p>
                            <div className="row general-info">
                                <span
                                    style={{backgroundColor: student.color, width: "12px", height: "12px",
                                        display: "inline-block", borderRadius: "50%"}}
                                />
                                <img src={star} className="star" alt={star}/>
                                <p className="rating">{student.rating}</p>
                            </div>
                        </div>
                        <button className="delete-mobile" onClick={() => handleDelete(student.id)}><img src={trashcan} alt={trashcan}/></button>
                    </div>
                    <hr/>
                    <div className="bottom-part">
                        <ul>
                            <li>{calculateAge(new Date(student.birthday))}</li>
                            <li>{student.specialty}</li>
                            <li>{student.group}</li>
                        </ul>
                    </div>
                </div>
            );
        })

    );
}

export default StudentsListMobile;