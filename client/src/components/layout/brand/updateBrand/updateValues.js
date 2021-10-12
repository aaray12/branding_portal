import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../utils/API"

function ValueUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedValues: props.values})
    const [valueName, setValueName] = React.useState()

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
        console.log(formObject.updatedValues)
        for(var i = 0; i < formObject.updatedValues.length; i ++){
            if(document.getElementsByName("Value"+(i+1))[0].value){
                newAr["Value"+(i+1)] = document.getElementsByName("Value"+(i+1))[0].value;
            }
            else{
                newAr["Value"+(i+1)] = formObject.updatedValues[i];
            }
        }
        formObject.updatedValues = Object.values(newAr);
        console.log(formObject.updatedValues)
        // formObject.updatedValues = Object.values(valueName);
        API.updateValues({
            BI: props.brandid,
            userid: props.userid,
            values: formObject.updatedValues
        })
        props.onHide()
    }
   
    // console.log(props.userid)
    
    function ValueOptions() {
        let valueAr = []
        for(var i = 0; i < formObject.updatedValues.length; i ++){
            var formName = "Value" +(valueAr.length + 1)
            valueAr.push(
                <li>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder={formObject.updatedValues[i]} name = {formName} onChange={handleValueName}/>
                </Form.Group>
                <Button onClick = {deleteValue} name ={formObject.updatedValues[i]} >Delete</Button>
            </li>
            )
        } 
        return(valueAr)
    }
    function addValue(){
        formObject.updatedValues.push("New Value")
    }
    function deleteValue(event){
        const { name} = event.target;
        var index = formObject.updatedValues.indexOf(name)

        if(index > -1){
            formObject.updatedValues.splice(index, 1);
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
                Brand Values
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <ol>
                       {ValueOptions()}
                   </ol>
                </Form>
                <Button onClick={addValue}> Add Value</Button>
                <Button onClick={handleSave}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default ValueUpdateModal;