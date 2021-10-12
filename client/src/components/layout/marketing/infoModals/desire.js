import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateDesire from "../updateModals/updateDesires"

function Desire(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showDesire(){
        let desireAr=[]
        if(props.desire[0] != undefined){
           
            for(var i = 0; i<props.desire.length; i++){
               
                desireAr.push(<li>
                        <p>{props.desire[i]}</p>
                    </li>)
            }
            return(desireAr)
        }
        else{
            desireAr.push(<li>No Desires are Saved</li>)
            return(desireAr)
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
                    Marketing Desires
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showDesire()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateDesire
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    desire={props.desire}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Desire;