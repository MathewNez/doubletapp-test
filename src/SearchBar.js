import searchIcon from "./searchIcon.png"

const SearchBar = () => {
    return(
      <div className="searchBar">
          <img src={ searchIcon } alt={ searchIcon }/>
          <input type="text" placeholder="Поиск по имени"/>
      </div>
    );
}

export default SearchBar;