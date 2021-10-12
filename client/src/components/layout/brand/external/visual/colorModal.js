import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateColor from "./update/updateColor"

function ColorModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function showColor(){
        let colorsAr=[]
        if(props.colors[0] != undefined){
           
            for(var i = 0; i<props.colors.length; i++){
               
                    colorsAr.push(<li>
                        <p style = {{color: props.colors[i].hexCode}}>{props.colors[i].colorName}</p>
                    </li>)
            }
            return(colorsAr)
        }
        else{
            colorsAr.push(<li>No Colors are Saved</li>)
            return(colorsAr)
        }
    }
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Colors
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ol>
                {showColor()}
                </ol>
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateColor
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    colors={props.colors}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default ColorModal;