import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateDesire(props) {
    const [formObject, setFormObject] = React.useState({})
    const [desireObject, setDesireObject] = React.useState({desire: props.desire})
    const [desireName, setDesireName] = React.useState()

    function handleDesireName(event){
        const { name, value } = event.target;
        setDesireName({...desireName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function desireList() {
        let desire = []
        if (desireObject.desire.length == 0) {
            desire.push(<li>
                <p>Click Add Desire to save new Desire</p>
            </li>)
        }
        else{
            for( var i = 0; i < desireObject.desire.length; i++){
               var desireName = "Desire" + i
                desire.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={desireObject.desire[i]} name={desireName} onChange={handleDesireName}/>
                    </Form.Group>
                    <Button onClick = {deleteDesire} name ={desireObject.desire[i]} >X</Button>
                </li>)
            }
        }
        return(desire)
    }
    function addDesire(){
        desireObject.desire.push("New Desire")
        // console.log(ArchObject.messages)
    }
    function deleteDesire(event){
        const { name} = event.target;
        var index = desireObject.desire.indexOf(name)

        if(index > -1){
            desireObject.desire.splice(index, 1);
        }
    }
    function desireSave(event){
        event.preventDefault()
        let newDesireAr = {};
        for(var i = 0; i < desireObject.desire.length; i ++){
            if(document.getElementsByName("Desire"+(i))[0].value){
                newDesireAr["Desire"+(i+1)] = document.getElementsByName("Desire"+(i))[0].value;
            }
            else{
                newDesireAr["Desire"+(i+1)] = desireObject.desire[i];
            }
        }
        formObject.updatedDesire =  Object.values(newDesireAr);
        API.updateDesire({
            desires: formObject.updatedDesire,
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
            Marketing Desires
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {desireList()}
                </ol>
            </Form>
            <Button onClick={addDesire}> Add Desire</Button>
            <Button onClick={desireSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateDesire;