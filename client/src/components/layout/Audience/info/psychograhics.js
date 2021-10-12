import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdatePsychograhics from "../update/updatePsychograhics"

function Psychograhics(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showPsychograhics(){
        let psychograhicsAr=[]
        if(props.audPsychograhics[0] != undefined){
           
            for(var i = 0; i<props.audPsychograhics.length; i++){
               
                psychograhicsAr.push(<li>
                        <p>{props.audPsychograhics[i]}</p>
                    </li>)
            }
            return(psychograhicsAr)
        }
        else{
            psychograhicsAr.push(<li>No Psychograhics are Saved</li>)
            return(psychograhicsAr)
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
                    {props.rank} Audience psychograhics
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showPsychograhics()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdatePsychograhics
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audPsychograhics={props.audPsychograhics}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Psychograhics;