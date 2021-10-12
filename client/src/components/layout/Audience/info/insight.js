import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateInsights from "../update/updateInsight"

function Insights(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showInsights(){
        let insightsAr=[]
        if(props.audInsights[0] != undefined){
           
            for(var i = 0; i<props.audInsights.length; i++){
               
                    insightsAr.push(<li>
                        <p>{props.audInsights[i]}</p>
                    </li>)
            }
            return(insightsAr)
        }
        else{
            insightsAr.push(<li>No insights are Saved</li>)
            return(insightsAr)
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
                    {props.rank} Audience insights
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showInsights()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateInsights
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audInsights={props.audInsights}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Insights;