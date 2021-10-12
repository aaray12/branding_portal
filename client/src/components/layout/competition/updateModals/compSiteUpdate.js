import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function CompSiteUpdate(props) {
    const [modalShow, setModalShow] = React.useState(false);
    // console.log(props.rank)
    // console.log(props.brandInfo)
    const [formObject, setFormObject] = React.useState({updatedCompSite: props.compSite})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function updateCompSite(){
        API.updateCompSite({
            userid: props.userid,
            updatedSite: formObject.updatedCompSite,
            BI: props.brandid,
            rank: props.rank,
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
                {props.rank} Competitor Website
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="updatedCompSite" onChange={handleInputChange} value = {formObject.updatedCompSite}/>
                    </Form.Group>
                </Form>
                <Button onClick={updateCompSite}> Update</Button>
            </Modal.Body>
        </Modal>
        
    )
}

export default CompSiteUpdate;