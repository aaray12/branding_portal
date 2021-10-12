import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateGains from "../update/updateGains"

function Gains(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showGains(){
        let gainsAr=[]
        if(props.audGains[0] != undefined){
           
            for(var i = 0; i<props.audGains.length; i++){
               
                    gainsAr.push(<li>
                        <p>{props.audGains[i]}</p>
                    </li>)
            }
            return(gainsAr)
        }
        else{
            gainsAr.push(<li>No Gains are Saved</li>)
            return(gainsAr)
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
                    {props.rank} Audience Gains
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showGains()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateGains
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audGains={props.audGains}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Gains;