import React from "react";
import { Modal, Button } from 'react-bootstrap';
import CompArchUpdate from "../updateModals/compArchUpdate"

function CompArchs(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showArchs(){
        let archAr=[]
        if(props.compArchs[0] != undefined){
           
            for(var i = 0; i<props.compArchs.length; i++){
               
                    archAr.push(<li>
                        <p>{props.compArchs[i]}</p>
                    </li>)
            }
            return(archAr)
        }
        else{
            archAr.push(<li>No Archs Saved</li>)
            return(archAr)
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
                    {props.rank} Competitor Archs
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showArchs()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <CompArchUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    compArchs={props.compArchs}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default CompArchs;