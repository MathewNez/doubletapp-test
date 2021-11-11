import searchIcon from "../images/searchIcon.png"


const SearchBar = ({filters, setFilters}) => {

    const handleSearch = (query) => {
        setFilters({
            ...filters,
            query
        });
    }

    return (
        <div className="searchBar">
            <img src={searchIcon} alt={searchIcon}/>
            <input onChange={event => handleSearch(event.target.value)} type="text" placeholder="Поиск по имени"/>
        </div>
    );
}

export default SearchBar;