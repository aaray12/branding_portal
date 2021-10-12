import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import UploadImagesModal from "./update/uploadImages"
import UpdateImagesModal from "./update/updateImages"
// import API from "../../utils/API"

function ImageModal(props) {
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
                    Brand Images
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.brandInfo.images && props.brandInfo.images.map((image, index) =>
                    <div style={{ textAlign: "center", margin: "2%" }}>
                        <img src={image.url} style={{ width: "300px", margin: "auto" }}></img>
                        <p>{image.imageName}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setUploadImageShow(true)}>Add Image</Button>
                <UploadImagesModal
                    show={uploadImageShow}
                    onHide={() => setUploadImageShow(false)}
                    userid={props.userid}
                    brandid={props.brandid}
                    brandInfo={props.brandInfo}
                />
                <Button onClick={() => setUpdateImageShow(true)}>Edit Images</Button>
                <UpdateImagesModal
                    show={updateImageShow}
                    onHide={() => setUpdateImageShow(false)}
                    userid={props.userid}
                    brandid={props.brandid}
                    brandInfo={props.brandInfo}
                />
            </Modal.Footer>
        </Modal>
    );
}
export default ImageModal;