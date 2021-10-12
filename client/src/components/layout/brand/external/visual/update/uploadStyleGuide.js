import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from "../../../../../../utils/API"

function UploadStyleGuideModal(props) {
    const [formObject, setFormObject] = React.useState({updatedStyleGuide: props.sg})
    const [selectedFile, setSelectedFile] = React.useState('')

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const uploadImage = async () => {
        try {
            await fetch('/api/uploadSG', {
                method: 'POST',
                body: JSON.stringify({data: formObject.updatedStyleGuide,
                userid: props.userid, BI: props.brandid,}),
                headers: {'Content-type': 'application/json'}
            })
        } catch (error) {
            console.error(error)
        }
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
            Brand Style Guide
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={1} name="updatedStyleGuide" onChange={handleInputChange} value = {formObject.updatedStyleGuide}/>
                </Form.Group>
            </Form>
            <Button onClick={uploadImage}> Update</Button>
        </Modal.Body>
    </Modal>
    
)
}
export default UploadStyleGuideModal;