import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateSocial from "../update/updateAudSocial"

function Social(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showSocial(){
        let socialAr=[]
        if(props.audSocial[0] != undefined){
           
            for(var i = 0; i<props.audSocial.length; i++){
               
                    socialAr.push(<li>
                        <p>{props.audSocial[i]}</p>
                    </li>)
            }
            return(socialAr)
        }
        else{
            socialAr.push(<li>No Social influences are Saved</li>)
            return(socialAr)
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
                    {props.rank} Audience Social Influences
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showSocial()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateSocial
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    audSocial={props.audSocial}
                    BI= {props.BI}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Social;