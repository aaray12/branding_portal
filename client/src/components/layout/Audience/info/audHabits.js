import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateHabits from "../update/audHabitsUpdate"

function Habits(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showHabits(){
        let mediaAr=[]
        if(props.audHabits[0] != undefined){
           
            for(var i = 0; i<props.audHabits.length; i++){
               
                    mediaAr.push(<li>
                        <p>{props.audHabits[i]}</p>
                    </li>)
            }
            return(mediaAr)
        }
        else{
            mediaAr.push(<li>No Habits influences are Saved</li>)
            return(mediaAr)
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
                    {props.rank} Audience Habits Influences
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showHabits()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateHabits
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audHabits={props.audHabits}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Habits;