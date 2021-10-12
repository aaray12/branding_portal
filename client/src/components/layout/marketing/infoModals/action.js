import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateAction from "../updateModals/updateAction"

function Action(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showAction(){
        let actionAr=[]
        if(props.action[0] != undefined){
           
            for(var i = 0; i<props.action.length; i++){
               
                actionAr.push(<li>
                        <p>{props.action[i]}</p>
                    </li>)
            }
            return(actionAr)
        }
        else{
            actionAr.push(<li>No Actiones are Saved</li>)
            return(actionAr)
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
                    Marketing Actiones
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showAction()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateAction
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    action={props.action}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Action;