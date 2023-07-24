

import { memo, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { putEditUser } from '../Service/UserService';




const ModelEdit = (props) => {
    const {show, handleClose, dataItem, handleUpdateTableFormModel, isEdit} = props;
   
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [data, setData] = useState({});

    //const [data, setData] = useState({});
    useEffect(() => {
        console.log('useEfect chay ne');
        if(show){
            setName(dataItem.first_name)
        }
    }, [dataItem])


    const  handleEditUser = async () =>{
        let res = await putEditUser(name,job)
        let id =  dataItem["id"]
        handleUpdateTableFormModel(res,id)
        handleClose()
        toast.success("Update Thành công")
        
    }
    console.log(isEdit);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" value={name} 
                                onChange={(event) =>{ setName(event.target.value)}}
                            />
                        </div>
        
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" value={job} 
                                onChange={(event) =>{ setJob(event.target.value)}}
                            />
                        </div>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" >
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleEditUser()}>
                   Edit
                </Button>
        
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default memo(ModelEdit);