import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from "../../../../../../utils/API"

function UploadLogoModal(props) {
    const [fileInputState, setFileInputState] = React.useState('')
    const [formObject, setFormObject] = React.useState({})
    const [selectedFile, setSelectedFile] = React.useState('')

    const handleFileInputChange = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];

        previewFile(file)
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        // console.log(Object.values(valueName))
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setSelectedFile(reader.result)
        }
    }
    const handlesubmitFile = (e)=>{
        e.preventDefault();
        if(!selectedFile)return;
        uploadLogo(selectedFile)
    }
    const uploadLogo = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        // if(props.brandInfo.logo){
        //     API.deleteLogo({
        //         BI: props.brandid,
        //         deletedLogo: props.brandInfo.logo
        //     })
        // }
        try {
            await fetch('/api/uploadlogo', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage,
                userid: props.userid, BI: props.brandid, folderName: props.brandInfo.brandName, logoName: formObject.logoName}),
                headers: {'Content-type': 'application/json'}
            })
        } catch (error) {
            console.error(error)
        }
        props.onHide()
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
                    Brand Logos
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1> Upload Logo</h1>
                <Form  onSubmit={handlesubmitFile}>
                <input type = "file" name="image" onChange={handleFileInputChange} value={fileInputState } className = "form-input"></input>
                <h5> Logo Name:</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="input" placeholder="Logo Name" name="logoName" onChange={handleInputChange}/>
                    </Form.Group>
                    {selectedFile &&(
                    <img src= {selectedFile} alt="imagePrview"
                    style={{height: "250px "}}/>
                )}
                    <button className="btn" type = "submit">Save</button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
export default UploadLogoModal;