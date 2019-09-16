import React from 'react';
import Modal from 'react-bootstrap/Modal';

let ComponentModal = props => {

    const { handleSubmit, hideEmployeeModal} = props;

    return (
        <Modal show={props.showEmployeeModal}>
            <Modal.Header>
                <Modal.Title>ADD MODAL</Modal.Title>   
            </Modal.Header>
    
            <Modal.Body>
                
            </Modal.Body>
        </Modal>
    )
}

export default ComponentModal;