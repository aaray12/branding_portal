import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateOther from "../updateModals/updateOther"

function Other(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showOther(){
        let otherAr=[]
        if(props.other[0] != undefined){
           
            for(var i = 0; i<props.other.length; i++){
               
                otherAr.push(<li>
                        <p>{props.other[i]}</p>
                    </li>)
            }
            return(otherAr)
        }
        else{
            otherAr.push(<li>No Other Tactics are Saved</li>)
            return(otherAr)
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
                    Marketing Other Tactics
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showOther()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateOther
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    other={props.other}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Other;