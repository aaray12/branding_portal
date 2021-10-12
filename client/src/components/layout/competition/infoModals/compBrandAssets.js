import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import UploadCompBAModal from "../updateModals/compBAIpload"
// import API from "../../utils/API"

function CompBA(props) {
    const [uploadBAShow, setUploadBAShow] = React.useState(false);
// console.log(props.compLogos)
    function showCompBA(){
        let cBAAr=[]
        if(props.compBA[0] != undefined){
           
            for(var i = 0; i<props.compBA.length; i++){
               
                    cBAAr.push(<div>
                        <img
                            src={props.compBA[i].url}
                            width="300"
                            crop="scale"
                        />
                        <p>{props.compBA[i].name}</p>
                    </div>)
            }
            return(cBAAr)
        }
        else{
            cBAAr.push(<p>No Brand Assets Saved</p>)
            return(cBAAr)
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
                {props.rank} Competitor Brand Assets
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showCompBA()}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setUploadBAShow(true)}>Add Image</Button>
                <UploadCompBAModal
                    show={uploadBAShow}
                    onHide={() => setUploadBAShow(false)}
                    userid={props.userid}
                    brandid = {props.brandid}
                    rank={props.rank}
                    brandInfo ={props.brandInfo}
                />
            </Modal.Footer>
        </Modal>
    );
}
export default CompBA;