import React from "react";
import { Modal, Button } from 'react-bootstrap';
import ManiUpdateModal from "./updateBrand/updateMani"
function ManiModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Manifesto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.mani}</p>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <ManiUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                mani = {props.mani}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default ManiModal;