import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateSubStrat from "../updateModals/updatedSubStrat"

function SubStrat(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showSubStrat(){
        let subStratAr=[]
        if(props.subStrat[0] != undefined){
           
            for(var i = 0; i<props.subStrat.length; i++){
               
                subStratAr.push(<li>
                        <p>{props.subStrat[i]}</p>
                    </li>)
            }
            return(subStratAr)
        }
        else{
            subStratAr.push(<li>No Sub-Strategies are Saved</li>)
            return(subStratAr)
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
                    Marketing Sub-Strategies
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showSubStrat()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateSubStrat
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    subStrat={props.subStrat}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default SubStrat;