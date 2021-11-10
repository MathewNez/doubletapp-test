import Navbar from "./Navbar";
import Students from "./Students";
import SearchBar from "./SearchBar";
import SortList from "./SortList";
import Table from "./Table";

const DesktopLayout = (props) => {
    return(
        <div>
            <Navbar />
            <div className="content">
                <Students/>
                <div className="container">
                    <SearchBar filters={props.filters} setFilters={props.setFilters}/>
                        <SortList filters={props.filters} setFilters={props.setFilters}/>
                </div>
                    <Table
                        students={props.filteredData}
                        handleDelete={props.handleDelete}
                        isLoading={props.isLoading}
                        calculateAge={props.calculateAge}
                    />
            </div>
        </div>
    );
}

export default DesktopLayout;