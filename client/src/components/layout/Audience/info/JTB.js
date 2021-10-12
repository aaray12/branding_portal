import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateJTB from "../update/updateJTB"

function JTB(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showJTB(){
        let jtbAr=[]
        if(props.audJTB[0] != undefined){
           
            for(var i = 0; i<props.audJTB.length; i++){
               
                    jtbAr.push(<li>
                        <p>{props.audJTB[i]}</p>
                    </li>)
            }
            return(jtbAr)
        }
        else{
            jtbAr.push(<li>No Jobs to be done are Saved</li>)
            return(jtbAr)
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
                    {props.rank} Audience Jobs To Be Done
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showJTB()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateJTB
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audJTB={props.audJTB}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default JTB;