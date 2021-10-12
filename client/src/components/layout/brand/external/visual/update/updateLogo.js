import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import API from "../../../../../../utils/API"

function UpdateLogosModal(props) {
    const [formObject, setFormObject] = React.useState(props.brandInfo.logo)
    


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function handleDelete(e) {
        e.preventDefault();
       const  {name} = e.target
       let updateLogo = props.brandInfo.logo;
       console.log("clicked " + updateLogo)
       let index;
       for (var i = 0; i < updateLogo.length; i++){
           if(updateLogo[i].logoName == name){
               index = i
           }
           console.log(updateLogo[i].logoName)
       };
    //    index = updateImage.indexOf(index)
       console.log(index)
       if(index > -1){
           updateLogo.splice(index, 1)
       }
        // console.log(index)
        // let xImg = name.replace(props.brandInfo.brandName +"/", "")
        console.log(updateLogo)
        setFormObject(updateLogo)
        API.deleteLogo({
                    BI: props.brandid,
                    deletedLogo: name,
                    updatedLogos: updateLogo,
                    userid: props.userid
                })
        // API.updateImages({
        //     userid: props.userid,
        //     BI: props.brandid,
        //     updatedImages: updateImage,
        //     folderName: props.brandInfo.brandName,
        //     deletedImaged: name,
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
                    Brand Logos
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.brandInfo.logo && props.brandInfo.logo.map((logo, index) =>
                    <div>
                        {/* {console.log(index)} */}
                        {/* <Image
                            key={index}
                            cloudName="aaray"
                            publicId={image}
                            width="300"
                            crop="scale"
                        /> */}
                        <img src ={logo.url} style ={{width: "300px", margin: "auto"}}></img>
                        <Button onClick = {handleDelete}style ={{color: "red"}} name = {logo.logoName}>X</Button>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default UpdateLogosModal;