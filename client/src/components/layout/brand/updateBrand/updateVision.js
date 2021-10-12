import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../utils/API"

function VisionUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedVision: props.vision})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function updateVision(){
        API.updateVision({
            BI: props.brandid,
            userid: props.userid,
            vision: formObject.updatedVision
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
                Brand Vision
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedVision" onChange={handleInputChange} value = {formObject.updatedVision}/>
                    </Form.Group>
                </Form>
                {/* <p>{props.mission}</p> */}
                <Button onClick={updateVision}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default VisionUpdateModal;