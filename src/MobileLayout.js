import NavbarMobile from "./NavbarMobile";
import Students from "./Students";
import SearchBar from "./SearchBar";
import SortListMobile from "./SortListMobile";
import LoaderMobile from "./LoaderMobile";
import StudentsListMobile from "./StudentsListMobile";

const MobileLayout = (props) => {
    return(
        <div>
            <NavbarMobile/>
            <div className="content-mobile">
                <Students/>
                <div className="container-mobile">
                    <SearchBar filters={props.filters} setFilters={props.setFilters}/>
                    <SortListMobile filters={props.filters} setFilters={props.setFilters}/>
                </div>
                {props.isLoading && <LoaderMobile/>}
                    <StudentsListMobile
                        students={props.filteredData}
                        handleDelete={props.handleDelete}
                        isLoading={props.isLoading}
                        calculateAge={props.calculateAge}
                    />
            </div>
        </div>
    );
}

export default MobileLayout;