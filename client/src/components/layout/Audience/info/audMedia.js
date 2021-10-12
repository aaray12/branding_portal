import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateMedia from "../update/updateAudMedia"

function Media(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showMedia(){
        let mediaAr=[]
        if(props.audMedia[0] != undefined){
           
            for(var i = 0; i<props.audMedia.length; i++){
               
                    mediaAr.push(<li>
                        <p>{props.audMedia[i]}</p>
                    </li>)
            }
            return(mediaAr)
        }
        else{
            mediaAr.push(<li>No Media influences are Saved</li>)
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
                    {props.rank} Audience Media Influences
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showMedia()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateMedia
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audMedia={props.audMedia}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Media;