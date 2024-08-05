import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table";

export default function UserList() {
    return (
        <section className="card users-container">
            <SearchBar />

            <Table />

            {/* New user button  */}
            <button className="btn-add btn">Add new user</button>

            <Pagination />
            
        </section>
    );
}