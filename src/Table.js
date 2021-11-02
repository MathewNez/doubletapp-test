import trashcan from "./trashcan.png"
import DeleteButton from "./DeleteButton";

const Table = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Пупа</td>
                    <td>Крыса с моаиса</td>
                    <td>МО-1337</td>
                    <td>Много</td>
                    <td>Ты мне мозги-то не еби, я спрашиваю: Сколько?</td>
                    <td>Цвет тут должен потом быть</td>
                    <td><DeleteButton /></td>
            </tr>
                <tr>
                    <td>Лупа</td>
                    <td>фиит (сосёт)</td>
                    <td>ФТ-Артемий Рогоффффф</td>
                    <td>74</td>
                    <td>228</td>
                    <td>Цвет тут должен потом быть</td>
                    <td><DeleteButton /></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;