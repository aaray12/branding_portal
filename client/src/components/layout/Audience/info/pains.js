import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdatePains from "../update/updatePains"

function Pains(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showPains(){
        let painsAr=[]
        if(props.audPains[0] != undefined){
           
            for(var i = 0; i<props.audPains.length; i++){
               
                    painsAr.push(<li>
                        <p>{props.audPains[i]}</p>
                    </li>)
            }
            return(painsAr)
        }
        else{
            painsAr.push(<li>No Pains are Saved</li>)
            return(painsAr)
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
                    {props.rank} Audience Pains
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showPains()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdatePains
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audPains={props.audPains}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Pains;