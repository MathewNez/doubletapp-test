import searchIcon from "./searchIcon.png"

const SearchBar = ({handleSearch}) => {
    return(
      <div className="searchBar">
          <img src={ searchIcon } alt={ searchIcon }/>
          <input onChange={event => handleSearch(event)} type="text" placeholder="Поиск по имени"/>
      </div>
    );
}

export default SearchBar;