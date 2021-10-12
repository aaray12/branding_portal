import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import API from "../../../../utils/API"

function AddAudienceModal(props) {
    const [formObject, setFormObject] = React.useState()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })  
    };
    function handleSave(){
       
        API.saveAud({
            userid: props.userid,
            audName: formObject.aud,
            BI: props.brandid,
            audRank: formObject.AudRank
        })
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Audience Input
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Competitor Name</Form.Label>
                        <Form.Control type="name" placeholder="name" name="aud" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many Values do you want to add?</Form.Label>
                        <Form.Control name="AudRank" as="select" onChange={handleInputChange}>
                            <option>Pick Audience Type</option>
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Tertiary</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddAudienceModal;