import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../utils/API"

function MissionUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedMission: props.mission})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function updateMission(){
        API.updateMission({
            BI: props.brandid,
            userid: props.userid,
            mission: formObject.updatedMission
        })
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mission Statement
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedMission" onChange={handleInputChange} value = {formObject.updatedMission}/>
                    </Form.Group>
                </Form>
                {/* <p>{props.mission}</p> */}
                <Button onClick={updateMission}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default MissionUpdateModal;