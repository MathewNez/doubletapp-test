import StudentsList from "./StudentsList";
import Loader from "./Loader";

const Table = ({students, handleDelete, isLoading, calculateAge, error}) => {

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
                    {(isLoading || error) && <Loader errMsg={error}/>}
                    <tbody>
                    <StudentsList students={students} handleDelete={handleDelete} calculateAge={calculateAge}/>
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;