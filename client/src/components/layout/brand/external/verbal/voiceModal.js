import React from "react";
import { Modal, Button } from 'react-bootstrap';
import VoiceUpdateModal from "./update/updateVoice"

function VoiceModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Voice
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{!props.voice?"no voice saved":props.voice
                }</p>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <VoiceUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                voice = {props.voice}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default VoiceModal;