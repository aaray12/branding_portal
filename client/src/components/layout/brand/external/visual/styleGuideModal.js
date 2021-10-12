import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import UploadStyleGuideModal from "./update/uploadStyleGuide"
import UpdateImagesModal from "./update/updateImages"
// import API from "../../utils/API"

function StyleGuideModal(props) {
    const [formObject, setFormObject] = React.useState()
    const [updateImageShow, setUpdateImageShow] = React.useState(false);
    const [uploadImageShow, setUploadImageShow] = React.useState(false);


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function handleEdit() {
        console.log(formObject)
        // API.saveComp({
        //     userid: props.userid,
        //     competitorName: formObject.comp1
        // })

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Style Guide
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href={props.brandInfo.styleGuide} target ="_blank">Go To Style Guide</a>
                <p>( {props.brandInfo.styleGuide} )</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setUploadImageShow(true)}>Edit Style Guide</Button>
                <UploadStyleGuideModal
                    show={uploadImageShow}
                    onHide={() => setUploadImageShow(false)}
                    userid={props.userid}
                    brandid = {props.brandid}
                    brandInfo={props.brandInfo}
                    sg={props.brandInfo.styleGuide}
                />
                {/* <Button onClick={() => setUpdateImageShow(true)}>Edit Images</Button>
                <UpdateImagesModal
                    show={updateImageShow}
                    onHide={() => setUpdateImageShow(false)}
                    userid={props.userid}
                    brandid = {props.brandid}
                    brandInfo={props.brandInfo}
                /> */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default StyleGuideModal;