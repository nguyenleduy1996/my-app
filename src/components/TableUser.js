
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FetchAllUser } from '../Service/UserService';

const TableUser = (props) =>{
    const [listUser, setListUser] = useState([]);
    useEffect(() =>{
        getUser();
    },[])
    
    const getUser = async () =>{
        let res = await FetchAllUser();
        if(res && res.data){
            setListUser(res.data)
        }
    }
    console.log(listUser)
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
    
    </>)
}
export default TableUser