import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../../../utils/API"

function TaglineUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedTagline: props.taglines})
    const [valueName, setValueName] = React.useState()
    // console.log(props.Tagline.length)

    // setFormValues();
    // console.log(valueName)
    // for(var i = 0; i < formObject.updatedValues.length; i ++){
    //     const name = "Value" +(i+ 1);
    //     const value = formObject.updatedValues[i]
       
    //     setValueName({...valueName, [name]: value})
    // }
    // console.log(valueName)

    function handleValueName(event){
        const { name, value } = event.target;
        setValueName({...valueName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function handleSave(event) {
        let newAr = {};
        console.log(formObject.updatedTagline)
        for(var i = 0; i < formObject.updatedTagline.length; i ++){
            if(document.getElementsByName("Tagline"+(i+1))[0].value){
                newAr["Tagline"+(i+1)] = document.getElementsByName("Tagline"+(i+1))[0].value;
            }
            else{
                newAr["Tagline"+(i+1)] = formObject.updatedTagline[i];
            }
        }
        formObject.updatedTagline = Object.values(newAr);
        console.log(formObject.updatedTagline)
        API.updateTaglines({
            userid: props.userid,
            BI: props.brandid,
            tagline: formObject.updatedTagline
        
    })
    props.onHide()
}

    // console.log(props.userid)
    
    function ValueOptions() {
        let valueAr = []
        for(var i = 0; i < formObject.updatedTagline.length; i ++){
            var formName = "Tagline" +(valueAr.length + 1)
            valueAr.push(
                <li>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder={formObject.updatedTagline[i]} name = {formName} onChange={handleValueName}/>
                </Form.Group>
                <Button onClick = {deleteValue} name ={formObject.updatedTagline[i]} >Delete</Button>
            </li>
            )
        } 
        return(valueAr)
    }
    function addValue(){
        formObject.updatedTagline.push("New Tagline")
    }
    function deleteValue(event){
        const { name} = event.target;
        var index = formObject.updatedTagline.indexOf(name)

        if(index > -1){
            formObject.updatedTagline.splice(index, 1);
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
                Brand Taglines
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <ol>
                       {ValueOptions()}
                   </ol>
                </Form>
                <Button onClick={addValue}> Add Tagline</Button>
                <Button onClick={handleSave}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default TaglineUpdateModal;