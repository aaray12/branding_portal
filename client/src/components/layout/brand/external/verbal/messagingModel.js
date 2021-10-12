import React from "react";
import { Modal, Button } from 'react-bootstrap';
import MessagingUpdateModal from "./update/updateMessaging"

function MessagingModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    let messages;
    if(props.messaging) {messages = props.messaging.map(x => {
        return(
            <li key={x}>
                {x}
            </li>
        )
    })}
    // console.log(props.messaging[0]==undefined)
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Messaging
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    
                    {props.messaging[0]==undefined?<p>No Messaging Saved</p>: <ol>{messages}</ol>}
                 
                    
               
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <MessagingUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                messaging = {props.messaging}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default MessagingModal;