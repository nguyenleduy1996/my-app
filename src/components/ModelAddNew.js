

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






const ModelAddNew = (props) => {
    const {show, handleClose} = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = () => {
        console.log("name =" , name, " job = ", job)
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