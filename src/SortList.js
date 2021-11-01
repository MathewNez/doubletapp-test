const SortList = () => {
    return (
            <select name="sortType" className="sortType">
                <option value="alphabet">Имя А-Я</option>
                <option value="alphabetReverse">Имя Я-А</option>
                <option value="age">Сначала моложе</option>
                <option value="ageReverse">Сначала старше</option>
                <option value="rating">Высокий рейтинг</option>
                <option value="ratingReverse">Низкий рейтинг</option>
            </select>
    );
}

export default SortList;