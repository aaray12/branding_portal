import React from "react";
import { Modal, Button } from 'react-bootstrap';
import CompSiteUpdate from "..//updateModals/compSiteUpdate"

function CompSite(props) {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.rank} Competitor Website
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.compSite}</p>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <CompSiteUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    compSite={props.compSite}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Modal.Body>
        </Modal>
    )
}

export default CompSite;