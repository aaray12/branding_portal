import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdatePrint from "../updateModals/updatePrint"

function Print(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showPrint(){
        let printAr=[]
        if(props.print[0] != undefined){
           
            for(var i = 0; i<props.print.length; i++){
               
                printAr.push(<li>
                        <p>{props.print[i]}</p>
                    </li>)
            }
            return(printAr)
        }
        else{
            printAr.push(<li>NoTactics are Saved</li>)
            return(printAr)
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
                     Tactics
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showPrint()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdatePrint
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    print={props.print}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Print;