import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateDemographics from "../update/updateDemographics"

function Demographics(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showDemographics(){
        let demographicsAr=[]
        if(props.audDemographics[0] != undefined){
           
            for(var i = 0; i<props.audDemographics.length; i++){
               
                demographicsAr.push(<li>
                        <p>{props.audDemographics[i]}</p>
                    </li>)
            }
            return(demographicsAr)
        }
        else{
            demographicsAr.push(<li>No demographics are Saved</li>)
            return(demographicsAr)
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
                    {props.rank} Audience demographics
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showDemographics()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateDemographics
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audDemographics={props.audDemographics}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Demographics;