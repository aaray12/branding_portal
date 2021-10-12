import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateDigital from "../updateModals/updateDigital"

function Digital(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showDigital(){
        let digitalAr=[]
        if(props.digital[0] != undefined){
           
            for(var i = 0; i<props.digital.length; i++){
               
                digitalAr.push(<li>
                        <p>{props.digital[i]}</p>
                    </li>)
            }
            return(digitalAr)
        }
        else{
            digitalAr.push(<li>No Digitals are Saved</li>)
            return(digitalAr)
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
                    Marketing Digitals
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showDigital()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateDigital
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    digital={props.digital}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Digital;