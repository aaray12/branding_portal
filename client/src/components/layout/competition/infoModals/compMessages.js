import React from "react";
import { Modal, Button } from 'react-bootstrap';
import CompMsgUpdate from "../updateModals/compMsgUpdate"

function CompMessages(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showMessages(){
        let cmAr=[]
        if(props.compMessages[0] != undefined){
           
            for(var i = 0; i<props.compMessages.length; i++){
               
                    cmAr.push(<li>
                        <p>{props.compMessages[i]}</p>
                    </li>)
            }
            return(cmAr)
        }
        else{
            cmAr.push(<li>No Messages Saved</li>)
            return(cmAr)
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
                    {props.rank} Competitor Messages
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showMessages()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <CompMsgUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    compMessages={props.compMessages}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default CompMessages;