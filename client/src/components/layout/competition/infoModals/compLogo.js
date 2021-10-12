import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import UploadCompLogoModal from "../updateModals/compLogoUpload"
// import API from "../../utils/API"

function CompLogos(props) {
    const [uploadLogoShow, setUploadLogoShow] = React.useState(false);
// console.log(props.compLogos)
    function showCompLogos(){
        let clAr=[]
        if(props.compLogos[0] != undefined){
           
            for(var i = 0; i<props.compLogos.length; i++){
               
                    clAr.push(<div>
                        <img
                            src={props.compLogos[i].url}
                            width="300"
                            crop="scale"
                        /><p>{props.compLogos[i].logoName}</p>
                    </div>)
            }
            return(clAr)
        }
        else{
            clAr.push(<p>No Logos Saved</p>)
            return(clAr)
        }
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
                {showCompLogos()}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setUploadLogoShow(true)}>Add Logo</Button>
                <UploadCompLogoModal
                    show={uploadLogoShow}
                    onHide={() => setUploadLogoShow(false)}
                    userid={props.userid}
                    brandid = {props.brandid}
                    rank={props.rank}
                    brandInfo={props.brandInfo}
                />
            </Modal.Footer>
        </Modal>
    );
}
export default CompLogos;