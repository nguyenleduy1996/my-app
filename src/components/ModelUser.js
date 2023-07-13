

import { memo, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { putEditUser } from '../Service/UserService';
import { postCreateUser } from '../Service/UserService';





const ModelUser = (props) => {
    const {show, handleClose, dataItem, handleUpdateTableFormModel, isEdit, handleUpdateTable } = props;
   
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [data, setData] = useState({});

    //const [data, setData] = useState({});
  
    useEffect(() => {
        if(show && isEdit){
            setName(dataItem.first_name)
        }else{
            setName("")
        }
    }, [dataItem,isEdit])

    const  handleEditUser = async () =>{
        let res = await putEditUser(name,job)
        let id =  dataItem["id"]
        handleUpdateTableFormModel(res,id)
        handleClose()
        toast.success("Update Thành công")   
    }
    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job)
        if(res &&  res.id){
            handleClose()
            setName("")
            setJob("")
            toast.success("Thành Công")
            handleUpdateTable({first_name:name, id: res.id})
        }else{
            toast.error("Éo Thành Công")
        }
    }
    if(isEdit){
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
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
    }else{
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="text" className="form-control"  value={name} 
                                    onChange={(event) => setName(event.target.value)}
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}
export default memo(ModelUser);