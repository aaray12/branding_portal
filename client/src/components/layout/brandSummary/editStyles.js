import React from "react";
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../utils/API"


function EditStyles(props) {
    // console.log(document.getElementById("manifesto"))
    const [formObject, setFormObject] = React.useState({})
    const tiles = ["Manifesto", "Mission", "Vision", "Values", "Colors", "Type Face", "Voice", "Messaging","Assets", "Style"]
    function tileOptions() {
        let optionAr = []
        for (var i = 0; i < tiles.length; i++) {
            optionAr.push(
                <option>{tiles[i]}</option>
            )
        }
        return (optionAr)
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        // console.log(Object.values(valueName))
    }
    function editOptions() {
        function ifOther(formName) {
            let choice;
            let fName;
            if (formName == "fontColorChoice") {
                choice = formObject.fontColorChoice
                fName = "fontColorOther"
            }
            else if (formName == "backgroundChoice") {
                choice = formObject.backgroundChoice
                fName = "backgroundOther"
            }
            if (choice == "Other") {
                return (
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" name={fName} onChange={handleInputChange} />
                    </Form.Group>
                )
            }
        }
        if (formObject.tileChoice !== undefined) {
            function colorOptions() {
                let colorOptionsAr = []
                for (var i = 0; i < props.brandInfo.colors.length; i++) {
                    colorOptionsAr.push(
                        <option>{props.brandInfo.colors[i].colorName}</option>
                    )
                }
                return (colorOptionsAr)
            }
            function fontOptions(){
                let fontOptionsAr=[]
                if(props.brandInfo.fonts.length > 0){ 
                    for(var w = 0; w<props.brandInfo.fonts.length; w++){
                    fontOptionsAr.push(
                        <option>{props.brandInfo.fonts[w].name}</option>
                    )
               }
               return(fontOptionsAr)
            }
            }
            return (
                <>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose Font</Form.Label>
                        <Form.Control as="select" name="fontChoice" onChange={handleInputChange}>
                            <option>none</option>
                            {fontOptions()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose Font Color</Form.Label>
                        <Form.Control as="select" name="fontColorChoice" onChange={handleInputChange}>
                            <option>none</option>
                            {colorOptions()}
                            <option>Other</option>
                        </Form.Control>
                        {ifOther("fontColorChoice")}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Background Color</Form.Label>
                        <Form.Control as="select" name="backgroundChoice" onChange={handleInputChange}>
                            <option>none</option>
                            {colorOptions()}
                            <option>Other</option>
                        </Form.Control>
                        {ifOther("backgroundChoice")}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Hide Header</Form.Label>
                        <Form.Control as="select" name="headerChoice" onChange={handleInputChange}>
                            <option>No</option>
                            <option>Yes</option>
                        </Form.Control>
                    </Form.Group>
                </>
            )
        }
    }
    function handleSave(event) {
        event.preventDefault()
        console.log(formObject)
        var elem = document.getElementById(formObject.tileChoice.toLowerCase().replace(" ", ""))

        for (var i = 0; i < props.brandInfo.fonts.length; i++) {
            if (formObject.fontChoice == props.brandInfo.fonts[i].name) {
                elem.style.fontFamily = props.brandInfo.fonts[i].css
            }
        }
        if (formObject.fontColorChoice == "Other") {
            // console.log(formObject.fontColorOther)
            formObject.fontColorChoice = formObject.fontColorOther;
            elem.style.color = formObject.fontColorOther
        }
        else{
            for(var i = 0; i<props.brandInfo.colors.length; i++){
                if(formObject.fontColorChoice == props.brandInfo.colors[i].colorName){
                    elem.style.color = props.brandInfo.colors[i].hexCode
                    console.log("hit")}
                }
        }
        if (formObject.backgroundChoice == "Other") {
            // console.log(formObject.fontColorOther)
            elem.style.backgroundColor = formObject.backgroundOther
            formObject.backgroundChoice = formObject.backgroundOther
            console.log(formObject.backgroundChoice)
        }
        else{
            for(var i = 0; i<props.brandInfo.colors.length; i++){
                if(formObject.backgroundChoice == props.brandInfo.colors[i].colorName){
                    elem.style.backgroundColor = props.brandInfo.colors[i].hexCode
                    console.log("hit")}
                }
        }
        if (formObject.headerChoice == "Yes") {
            elem = document.getElementById(formObject.tileChoice.toLowerCase() + "H")
            elem.style.display = "none"
        }
        API.saveTileStyle({
            userid: props.userid,
            BI: props.BI,
            name: formObject.tileChoice.toLowerCase(),
            backgroundColor: (formObject.backgroundChoice?formObject.backgroundChoice:"N/A"),
            font: (formObject.fontChoice?formObject.fontChoice:"N/A"),
            fontColor: (formObject.fontColorChoice?formObject.fontColorChoice: "N/A"),
            hideHeader: (formObject.headerChoice?formObject.headerChoice:"no")
        })

    }
    // console.log(formObject.tileChoice)
    if (props.brandInfo !== undefined) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Brand Summary Styles
            {/* {console.log(props.brandInfo)} */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Choose Tile</Form.Label>
                            <Form.Control as="select" name="tileChoice" onChange={handleInputChange}>
                                <option>none</option>
                                {tileOptions()}
                            </Form.Control>
                        </Form.Group>
                        {editOptions()}
                    </Form>
                    <Button onClick={handleSave}>Submit</Button>
                </Modal.Body>
            </Modal>
        )
    }

    else {
        return (<Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Brand Summary Styles
        {/* {console.log(props.brandInfo)} */}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>no info to share</h3>

            </Modal.Body>
        </Modal>
        )
    }
}

export default EditStyles;