import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from "../../utils/API"

function CompModal(props){
    const [formObject, setFormObject] = React.useState()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })  
    };
    function handleSave(){
        console.log(formObject.CompRank)
        API.saveComp({
            userid: props.userid,
            BI: props.brandid,
            competitorName: formObject.comp,
            competitorRank: formObject.CompRank
        })

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
                    Competiton Input
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Competitor Name</Form.Label>
                        <Form.Control type="name" placeholder="name" name="comp" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many Values do you want to add?</Form.Label>
                        <Form.Control name="CompRank" as="select" onChange={handleInputChange}>
                            <option>Pick Competitor Rank</option>
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Tertiary</option>
                            <option>Qurtinary</option>
                       
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
export default CompModal;