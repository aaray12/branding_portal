import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import API from "../../../../../../utils/API"

function MessagingUpdateModal(props) {
    const [formObject, setFormObject] = React.useState({updatedMessaging: props.messaging})
    const [valueName, setValueName] = React.useState()
    // console.log(props.messaging.length)

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
        console.log(formObject.updatedMessaging)
        for(var i = 0; i < formObject.updatedMessaging.length; i ++){
            if(document.getElementsByName("Messaging"+(i+1))[0].value){
                newAr["Messaging"+(i+1)] = document.getElementsByName("Messaging"+(i+1))[0].value;
            }
            else{
                newAr["Messaging"+(i+1)] = formObject.updatedMessaging[i];
            }
        }
        formObject.updatedMessaging = Object.values(newAr);
        console.log(formObject.updatedMessaging)
        API.updateMessaging({
            userid: props.userid,
            BI: props.brandid,
            messaging: formObject.updatedMessaging
        
    })
    props.onHide()
}

    // console.log(props.userid)
    
    function MessageOptions() {
        let valueAr = []
        for(var i = 0; i < formObject.updatedMessaging.length; i ++){
            var formName = "Messaging" +(valueAr.length + 1)
            valueAr.push(
                <li>
                {/* <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder={formObject.updatedMessaging[i]} name = {formName} onChange={handleValueName}/>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder={formObject.updatedMessaging[i]} name = {formName} onChange={handleValueName}/>
                    </Form.Group>
                <Button onClick = {deleteValue} name ={formObject.updatedMessaging[i]} >Delete</Button>
            </li>
            )
        } 
        return(valueAr)
    }
    function addValue(){
        formObject.updatedMessaging.push("New Message")
    }
    function deleteValue(event){
        const { name} = event.target;
        var index = formObject.updatedMessaging.indexOf(name)

        if(index > -1){
            formObject.updatedMessaging.splice(index, 1);
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
                Brand Messaging
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <ol>
                       {MessageOptions()}
                   </ol>
                </Form>
                <Button onClick={addValue}> Add Message</Button>
                <Button onClick={handleSave}> Update</Button>
            </Modal.Body>
        </Modal>
    )
}

export default MessagingUpdateModal;