import DeleteButton from "./DeleteButton";
import logo from "./logo.svg"

const Table = () => {
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
                <tr>
                    <td><img src={logo} alt={logo}/></td>
                    <td>Пупа</td>
                    <td>Крыса с моаиса</td>
                    <td>МО-1337</td>
                    <td>Много</td>
                    <td>322</td>
                    <td>цвт</td>
                    <td><DeleteButton /></td>
                </tr>
                <tr>
                    <td><img src={logo} alt={logo}/></td>
                    <td>Лупа</td>
                    <td>фиит (сосёт)</td>
                    <td>ФТ-Артемий Рогоффффф</td>
                    <td>74</td>
                    <td>228</td>
                    <td>Цвт</td>
                    <td><DeleteButton /></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;