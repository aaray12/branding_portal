import React from "react";
import { Modal, Button } from 'react-bootstrap';
import MissionUpdateModal from "./updateBrand/updateMission"

function MissionModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    // console.log(props)

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mission Statement
                    {/* {console.log("WL: " + window.location.href)} */}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.mission}</p>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <MissionUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                mission = {props.mission}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default MissionModal;