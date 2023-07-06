
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FetchAllUser } from '../Service/UserService';
import ReactPaginate from 'react-paginate';

const TableUser = (props) =>{
    const [listUser, setListUser] = useState([]);
    const [totalUser, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() =>{
        getUser(1);
    },[])
    
    const getUser = async (page) =>{
        let res = await FetchAllUser(page);
        //console.log(res)
        if(res && res.data){
            setListUser(res.data)
            setTotalUser(res.total)
            setTotalPages(res.total_pages)

        }
    }
const handlePageClick = (event) => {
        console.log(event);
        getUser(+event.selected+1);
    };
    //console.log(listUser)
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {listUser && listUser.length > 0 && 
                listUser.map((item,index) => {
                    return(
                        <tr key={`user-${index}`}> 
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>    
                    )
                })
                }
              
            </tbody>
        </Table>
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    
    </>)
}
export default TableUser