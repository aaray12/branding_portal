import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateAwareness(props) {
    const [formObject, setFormObject] = React.useState({})
    const [awarenessObject, setAwarenessObject] = React.useState({awareness: props.awareness})
    const [awarenessName, setAwarenessName] = React.useState()

    function handleAwarenessName(event){
        const { name, value } = event.target;
        setAwarenessName({...awarenessName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function awarenessList() {
        let awareness = []
        if (awarenessObject.awareness.length == 0) {
            awareness.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < awarenessObject.awareness.length; i++){
               var awarenessName = "Awareness" + i
                awareness.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={awarenessObject.awareness[i]} name={awarenessName} onChange={handleAwarenessName}/>
                    </Form.Group>
                    <Button onClick = {deleteAwareness} name ={awarenessObject.awareness[i]} >X</Button>
                </li>)
            }
        }
        return(awareness)
    }
    function addAwareness(){
        awarenessObject.awareness.push("New Awareness")
        // console.log(ArchObject.messages)
    }
    function deleteAwareness(event){
        const { name} = event.target;
        var index = awarenessObject.awareness.indexOf(name)

        if(index > -1){
            awarenessObject.awareness.splice(index, 1);
        }
    }
    function awarenessSave(event){
        event.preventDefault()
        let newAwarenessAr = {};
        for(var i = 0; i < awarenessObject.awareness.length; i ++){
            if(document.getElementsByName("Awareness"+(i))[0].value){
                newAwarenessAr["Awareness"+(i+1)] = document.getElementsByName("Awareness"+(i))[0].value;
            }
            else{
                newAwarenessAr["Awareness"+(i+1)] = awarenessObject.awareness[i];
            }
        }
        formObject.updatedAwareness =  Object.values(newAwarenessAr);
        API.updateAwareness({
            awareness: formObject.updatedAwareness,
            BI: props.brandid,
            userid: props.userid
        })
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Awarenesses
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {awarenessList()}
                </ol>
            </Form>
            <Button onClick={addAwareness}> Add Awareness</Button>
            <Button onClick={awarenessSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateAwareness;