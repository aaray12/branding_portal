import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../../../utils/API"

function UpdateColors(props) {
    const [formObject, setFormObject] = React.useState({})
    const [colorsObject, setColorObject] = React.useState({colors: props.colors})
    const [colorsName, setColorName] = React.useState()
    const [hexCode, setHexCode] = React.useState()

    function handleColorName(event){
        const { name, value } = event.target;
        setColorName({...colorsName, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleHexCode(event){
        const { name, value } = event.target;
        setHexCode({...hexCode, [name]: value})
        // console.log(Object.values(valueName))
    }

    function colorsList() {
        let colors = []
        if (colorsObject.colors.length == 0) {
            colors.push(<li>
                <p>Click Add Color to save new Color</p>
            </li>)
        }
        else{
            for( var i = 0; i < colorsObject.colors.length; i++){
               var colorsName = "Color" + i
               var hexCode = "Hex" + i
                colors.push(<li>
                    <h5> Color Name:</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={colorsObject.colors[i].colorName} name={colorsName} onChange={handleColorName}/>
                    </Form.Group>
                    <h5>Hex Code:</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={"#ff0000"} name={hexCode} onChange={handleHexCode}/>
                    </Form.Group>
                    <Button onClick = {deleteColor} name ={colorsObject.colors[i]} >X</Button>
                </li>)
            }
        }
        return(colors)
    }
    function addColor(){
        colorsObject.colors.push("New Color")
        // console.log(ArchObject.messages)
    }
    function deleteColor(event){
        const { name} = event.target;
        var index = colorsObject.colors.indexOf(name)

        if(index > -1){
            colorsObject.colors.splice(index, 1);
        }
    }
    function colorsSave(event){
        event.preventDefault()
        let newColorAr = [];
   
        for(var i = 0; i < colorsObject.colors.length; i ++){
            let colorName;
            let hexCode;
            if(document.getElementsByName("Color"+(i))[0].value){
                colorName = document.getElementsByName("Color"+(i))[0].value;
            }
            else{
                colorName = colorsObject.colors[i].colorName;
            }
            if(document.getElementsByName("Hex"+(i))[0].value){
                hexCode = document.getElementsByName("Hex"+(i))[0].value;
            }
            else{
                hexCode = colorsObject.colors[i].hexCode;
            }
            newColorAr.push({
                colorName: colorName,
                hexCode: hexCode,
            })
        }
        formObject.updatedColor =  Object.values(newColorAr);
        API.saveBrandColors({
            colors: formObject.updatedColor,
            BI: props.brandid,
            userid: props.userid
        })
        props.onHide()
    }

    return(
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
            <Form>
                <ol>
                {colorsList()}
                </ol>
            </Form>
            <Button onClick={addColor}> Add Color</Button>
            <Button onClick={colorsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateColors;