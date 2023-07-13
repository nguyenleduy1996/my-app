
import { memo, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FetchAllUser } from '../Service/UserService';
import ReactPaginate from 'react-paginate';
import ModelAddNew from './ModelAddNew';
import ModelEdit from './ModelEdit';
import ModelUser from './ModelUser';
import ModelDelete from './ModelDelete';
import { Fade } from 'react-bootstrap';

const TableUser = (props) =>{
    const [listUser, setListUser] = useState([]);
    const [totalUser, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    // const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    // const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [isShowModalUser, setIsShowModalUser] = useState(false);
    const [isShowModaDelete, setIsShowModalDelete] = useState(false);
    const [dataItem, setDataItem] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const handleClose = ()  =>{
    //   setIsShowModalAddNew(false)
    //   setIsShowModalEdit(false)
      setIsShowModalDelete(false)
      setIsShowModalUser(false)
    }

    const handleUpdateTable = (user) => {
        setListUser([user, ...listUser]);
    }

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
    const EditUser = (item) =>{
        setIsShowModalUser(true)
        setDataItem(item)
        setIsEdit(true)
    };
    const DeleteUser = (item) =>{
        setIsShowModalDelete(true)
        setDataItem(item)
     
    };
    const handleUpdateTableFormModel = (res, id) =>{
        console.log(listUser)
        console.log(res)
        console.log(id)
        
         const updatedArray = listUser.map(obj => {
            if (obj.id === id) {
              return {
                id: obj.id,
                email:obj.email ,
                first_name: res.name,
                last_name: obj.last_name,
                avatar: obj.avatar
              };
            }
            return obj;
          });
        
        setListUser(updatedArray)
    }

    const handleDeleteTableFormModel = (id) =>{
      
      const updatedListUser = listUser.filter(user => user.id !== id);
      setListUser(updatedListUser)
    }

    const addNewUser = () => {
        setIsShowModalUser(true)
        setIsEdit(false)
    }
    //console.log(listUser)
    // console.log('cha re-render ne');
    return (<>
            <div className="my-3 add-new">
              <span> <b> list User:</b></span>
                <button type="button" className="btn btn-danger"
                  onClick={() => {addNewUser()}}
                >Add</button>
            </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
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
                            <td>
                            <button type="button" className="btn btn-warning mx-3" 
                                onClick={() => {EditUser(item)}}
                                >Edit</button>
                            <button type="button" className="btn btn-danger mx-3" 
                                onClick={() => {DeleteUser(item)}}
                                >Edit</button>

                            </td>
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
           {/* <ModelAddNew 
              isEdit={false}
              show = {isShowModalAddNew}
              handleClose = {handleClose}
              handleUpdateTable = {handleUpdateTable}
          />
        <ModelEdit 
             isEdit={true}
             show = {isShowModalEdit}
             handleClose = {handleClose}
             dataItem = {dataItem}
             handleUpdateTableFormModel = {handleUpdateTableFormModel}
            
        /> */}
        <ModelUser 
            show = {isShowModalUser}
            handleClose = {handleClose}
            dataItem = {dataItem}
            isEdit = {isEdit}
            handleUpdateTable = {handleUpdateTable}
            handleUpdateTableFormModel = {handleUpdateTableFormModel}
           
        />
        <ModelDelete 
            show = {isShowModaDelete}
            handleClose = {handleClose}
            dataItem = {dataItem}
            handleDeleteTableFormModel = {handleDeleteTableFormModel}
        />
    
    </>)
}
export default memo(TableUser)