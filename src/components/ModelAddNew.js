

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../Service/UserService';
import { toast } from 'react-toastify';




const ModelAddNew = (props) => {
    const {show, handleClose, handleUpdateTable} = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

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
export default ModelAddNew;