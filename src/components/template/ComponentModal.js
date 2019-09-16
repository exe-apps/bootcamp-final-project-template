import React from 'react';
import Modal from 'react-bootstrap/Modal';

let ComponentModal = props => {

    const { 
        handleChangeInfo, 
        handleAddComponent, 
        showComponentModal
    } = props;

    return (
        <Modal show={showComponentModal}>
            <Modal.Header>
                <Modal.Title>COMPONENT MODAL</Modal.Title>   
            </Modal.Header>
    
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="attribute1">Attribute1</label>
                        <input name="attribute1" className="form-control" type="text" placeholder="Component Attribute1" onChange={handleChangeInfo}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attribute2">Attribute2</label>
                        <input name="attribute2" className="form-control" type="text" placeholder="Component Attribute2" onChange={handleChangeInfo}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="attribute3">Attribute3</label>
                        <input name="attribute3" className="form-control" type="text" placeholder="Component Attribute3" onChange={handleChangeInfo}/>
                    </div>
                    <br/>
                    <button type="button" onClick={handleAddComponent}>Add Component</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ComponentModal;