import React from "react";
import { Modal, Button } from 'react-bootstrap';
import TaglineUpdateModal from "./update/updateTagline"

function TaglineModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    let tagline;
    if(props.taglines) {tagline = props.taglines.map(x => {
        return(
            <li key={x}>
                {x}
            </li>
        )
    })}
    // console.log(props.messaging[0]==undefined)
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Taglines
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    
                    {props.taglines[0]==undefined?<p>No Taglines Saved</p>: <ol>{tagline}</ol>}
                 
                    
               
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <TaglineUpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                taglines = {props.taglines}
                brandid = {props.brandid}
                userid={props.userid}/>
            </Modal.Body>
        </Modal>
    )
}

export default TaglineModal;