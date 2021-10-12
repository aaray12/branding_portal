import React from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateFonts from "./update/updateFonts"

function Fonts(props) {
    const [modalShow, setModalShow] = React.useState(false);

    function showFonts(){
        let fontsAr=[]
        if(props.fonts[0] != undefined){
           
            for(var i = 0; i<props.fonts.length; i++){
                const rankAr=["Primary", "Secondary", "Tertiary", "Qurtinary", "5th", "6th", "7th"]
                // document.head.innerHTML += props.fonts[i].link
                // console.log(props.fonts[i].css)
                    fontsAr.push(
                        <>
                        <h5>{rankAr[i]}:</h5>
                        <p style={{fontFamily: props.fonts[i].css}}>{props.fonts[i].name}</p>
                        </>
                    )
            }
            return(fontsAr)
        }
        else{
            fontsAr.push(<li>No Fonts are Saved</li>)
            return(fontsAr)
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
                    Brand Fonts
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                {showFonts()}
                
                <Button onClick={() => setModalShow(true)}>Edit</Button>
                <UpdateFonts
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    fonts={props.fonts}
                    brandid = {props.brandid}
                    userid={props.userid}
                />
            </Modal.Body>
        </Modal>
    )
}

export default Fonts;