import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateAwareness from "../updateModals/updateAwareness"

function Awareness(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showAwareness(){
        let awarenessAr=[]
        if(props.awareness[0] != undefined){
           
            for(var i = 0; i<props.awareness.length; i++){
               
                awarenessAr.push(<li>
                        <p>{props.awareness[i]}</p>
                    </li>)
            }
            return(awarenessAr)
        }
        else{
            awarenessAr.push(<li>No Awarenesses are Saved</li>)
            return(awarenessAr)
        }
    }
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Marketing Awarenesses
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showAwareness()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateAwareness
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    awareness={props.awareness}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Awareness;