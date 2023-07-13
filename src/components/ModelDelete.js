

import { memo, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../Service/UserService';



const ModelDelete = (props) => {
    const {show, handleClose, dataItem, handleDeleteTableFormModel } = props;
    const  handleDeleteUser = async () =>{
        let res = await deleteUser(dataItem.id)
        console.log(res)
        if(res && res.stausCode === 204){
            toast.success("delete Thành Công")
            handleClose(true)
            handleDeleteTableFormModel(dataItem.id)

        }else{
            toast.error("ERR")
        }
        
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        bạn có muốn xóa User có Email = {dataItem.email}
                  
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" >
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleDeleteUser()}>
                    Save Changes
                </Button>
        
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(ModelDelete);