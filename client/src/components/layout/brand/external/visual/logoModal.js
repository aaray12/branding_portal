import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import UploadLogoModal from "./update/uploadLogo"
import UpdateLogoModal from "./update/updateLogo"
// import UpdateImagesModal from "./update/updateImages"
// import API from "../../utils/API"

function ImageModal(props) {
    const [formObject, setFormObject] = React.useState()
    // const [updateImageShow, setUpdateImageShow] = React.useState(false);
    const [uploadLogoShow, setUploadLogoShow] = React.useState(false);
    const [updateLogoShow, setUpdateLogoShow] = React.useState(false);


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
                    Brand Logo
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.brandInfo.logo && props.brandInfo.logo.map((logo, index) =>
                    <div style={{textAlign: "center"}}>
                        <img src={logo.url} style={{ width: "300px", margin: "auto" }}></img>
                <p>{logo.logoName}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setUploadLogoShow(true)}>Add Logo</Button>
                <UploadLogoModal
                    show={uploadLogoShow}
                    onHide={() => setUploadLogoShow(false)}
                    userid={props.userid}
                    brandid={props.brandid}
                    brandInfo={props.brandInfo}
                />
                {/* <Button onClick={() => setUpdateLogoShow(true)}>Edit Logo</Button>
                <UpdateLogoModal
                    show={updateLogoShow}
                    onHide={() => setUpdateLogoShow(false)}
                    userid={props.userid}
                    brandInfo={props.brandInfo}
                /> */}
                <Button onClick={() => setUpdateLogoShow(true)}>Edit Logos</Button>
                <UpdateLogoModal
                    show={updateLogoShow}
                    onHide={() => setUpdateLogoShow(false)}
                    userid={props.userid}
                    brandid={props.brandid}
                    brandInfo={props.brandInfo}
                />
            </Modal.Footer>
        </Modal>
    );
}
export default ImageModal;