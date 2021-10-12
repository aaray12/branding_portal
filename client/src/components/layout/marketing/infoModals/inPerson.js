import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateInPerson from "../updateModals/updateinPerson"

function Person(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showInPerson(){
        let inPersonAr=[]
        if(props.inPerson[0] != undefined){
           
            for(var i = 0; i<props.inPerson.length; i++){
               
                inPersonAr.push(<li>
                        <p>{props.inPerson[i]}</p>
                    </li>)
            }
            return(inPersonAr)
        }
        else{
            inPersonAr.push(<li>No InPersons are Saved</li>)
            return(inPersonAr)
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
                    Marketing InPersons
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showInPerson()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateInPerson
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    inPerson={props.inPerson}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Person;