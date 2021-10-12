import React from "react";
import { Modal, Button } from 'react-bootstrap';
import VisionUpdateModal from "./updateBrand/updateVision"

function VisionModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Vision
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.vision}</p>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <VisionUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                vision = {props.vision}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default VisionModal;