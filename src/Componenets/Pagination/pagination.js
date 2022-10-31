import react,{useState} from 'react';
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

export default function Pagination() {
  const [users, setUsers] = useState(JsonData.slice(0,100));
  console.log("Paginate")
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 10
  const usersVisited = pageNumber*usersPerPage 
  const diplayUsers = users
  .slice(usersVisited, usersVisited + usersPerPage)
  .map((user) => {
    return (
        <div className='user'>
            <h3>{user.first_name}</h3>
            <h3>{user.last_name}</h3>
            <h3>{user.email}</h3>
        </div>
    );
  });

    const pageCount = Math.ceil(users.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

  return (
    <div className='Pagination'>
        {diplayUsers}
        <ReactPaginate
            previousLabel={"Previos"}
            nextAriaLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDissable"}
            activeClassName={"paginationActive"}
        />
    </div>
  )
}

