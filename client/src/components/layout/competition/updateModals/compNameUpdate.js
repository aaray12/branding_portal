import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function CompNameUpdateModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    // console.log(props.rank)
    // console.log(props.brandInfo)
    const [formObject, setFormObject] = React.useState({updatedCompName: props.compName})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function updateCompName(){
        API.updateCompName({
            userid: props.userid,
            updatedName: formObject.updatedCompName,
            BI: props.brandid,
            rank: props.rank,
            userid: props.userid
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
                {props.rank} Competitor Name
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedCompName" onChange={handleInputChange} value = {formObject.updatedCompName}/>
                    </Form.Group>
                </Form>
                {/* <p>{props.mission}</p> */}
                <Button onClick={updateCompName}> Update</Button>
            </Modal.Body>
        </Modal>
        
    )
}

export default CompNameUpdateModal;