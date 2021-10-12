import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../../../utils/API"

function VoiceUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedVoice: props.voice})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function updateVoice(){
        API.updateVoice({
            BI: props.brandid,
            userid: props.userid,
            voice: formObject.updatedVoice
        })
        props.onHide()
    }
    // console.log(props.Mani)
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
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedVoice" onChange={handleInputChange} value = {formObject.updatedVoice}/>
                    </Form.Group>
                </Form>
                {/* <p>{props.mission}</p> */}
                <Button onClick={updateVoice}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default VoiceUpdateModal;