import React from "react";
import { Modal, Button } from 'react-bootstrap';
import ValueUpdateModal from "./updateBrand/updateValues"

function ValueModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    let values = props.values.map(x => {
        return(
            <li key={x}>
                {x}
            </li>
        )
    })
    // console.log(props.userid)
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Values
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                    {values}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <ValueUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                values = {props.values}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default ValueModal;