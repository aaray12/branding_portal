import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../utils/API"

function ManiUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedMani: props.mani})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function updateMani(){
        API.updateMani({
            BI: props.brandid,
            userid: props.userid,
            mani: formObject.updatedMani
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
                Brand Manifesto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedMani" onChange={handleInputChange} value = {formObject.updatedMani}/>
                    </Form.Group>
                </Form>
                {/* <p>{props.mission}</p> */}
                <Button onClick={updateMani}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default ManiUpdateModal;