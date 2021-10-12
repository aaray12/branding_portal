import React from "react";
import { Modal, Button } from 'react-bootstrap';
import AudArchUpdate from "../update/updateArchetype"

function Archetypes(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showArchs(){
        let archAr=[]
        if(props.audArchs[0] != undefined){
           
            for(var i = 0; i<props.audArchs.length; i++){
               
                    archAr.push(<li>
                        <p>{props.audArchs[i]}</p>
                    </li>)
            }
            return(archAr)
        }
        else{
            archAr.push(<li>No Archetypes Saved</li>)
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
                    {props.rank} Audience Archetypes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showArchs()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <AudArchUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audArchs={props.audArchs}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Archetypes;