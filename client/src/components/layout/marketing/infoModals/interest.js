import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateInterest from "../updateModals/updateinterest"

function Interest(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showInterest(){
        let interestAr=[]
        if(props.interest[0] != undefined){
           
            for(var i = 0; i<props.interest.length; i++){
               
                interestAr.push(<li>
                        <p>{props.interest[i]}</p>
                    </li>)
            }
            return(interestAr)
        }
        else{
            interestAr.push(<li>No Interests are Saved</li>)
            return(interestAr)
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
                    Marketing Interests
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showInterest()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateInterest
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    interest={props.interest}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Interest;