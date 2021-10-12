import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import API from "../../../../../../utils/API"

function UpdateImagesModal(props) {
    const [formObject, setFormObject] = React.useState(props.brandInfo.images)
    


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function handleDelete(e) {
        e.preventDefault();
       const  {name} = e.target
       let updateImage = props.brandInfo.images;
       console.log("clicked " + updateImage)
       let index;
       for (var i = 0; i < updateImage.length; i++){
           if(updateImage[i].imageName == name){
               index = i
           }
           console.log(updateImage[i].imageName)
       };
    //    index = updateImage.indexOf(index)
       console.log(index)
       if(index > -1){
           updateImage.splice(index, 1)
       }
        // console.log(index)
        // let xImg = name.replace(props.brandInfo.brandName +"/", "")
        console.log(name)
        setFormObject(updateImage)
        API.updateImages({
            userid: props.userid,
            BI: props.brandid,
            updatedImages: updateImage,
            folderName: props.brandInfo.brandName,
            deletedImaged: name,
        })

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
                {props.brandInfo.images && formObject.map((image, index) =>
                    <div key={index}>
                        {/* <Image
                            
                            cloudName="aaray"
                            publicId={image}
                            width="300"
                            crop="scale"
                        /> */}
                        <img src ={image.url} style ={{width: "300px", margin: "auto"}}></img>
                        <Button onClick = {handleDelete}style ={{color: "red"}} name = {image.imageName}>X</Button>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default UpdateImagesModal;