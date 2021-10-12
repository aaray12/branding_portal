import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateInPerson(props) {
    const [formObject, setFormObject] = React.useState({})
    const [inPersonObject, setInPersonObject] = React.useState({inPerson: props.inPerson})
    const [inPersonName, setInPersonName] = React.useState()

    function handleInPersonName(event){
        const { name, value } = event.target;
        setInPersonName({...inPersonName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function inPersonList() {
        let inPerson = []
        if (inPersonObject.inPerson.length == 0) {
            inPerson.push(<li>
                <p>Click Add Tactic to save new In Person Tactic</p>
            </li>)
        }
        else{
            for( var i = 0; i < inPersonObject.inPerson.length; i++){
               var inPersonName = "InPerson" + i
                inPerson.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={inPersonObject.inPerson[i]} name={inPersonName} onChange={handleInPersonName}/>
                    </Form.Group>
                    <Button onClick = {deleteInPerson} name ={inPersonObject.inPerson[i]} >X</Button>
                </li>)
            }
        }
        return(inPerson)
    }
    function addInPerson(){
        inPersonObject.inPerson.push("New InPerson")
        // console.log(ArchObject.messages)
    }
    function deleteInPerson(event){
        const { name} = event.target;
        var index = inPersonObject.inPerson.indexOf(name)

        if(index > -1){
            inPersonObject.inPerson.splice(index, 1);
        }
    }
    function inPersonSave(event){
        event.preventDefault()
        let newInPersonAr = {};
        for(var i = 0; i < inPersonObject.inPerson.length; i ++){
            if(document.getElementsByName("InPerson"+(i))[0].value){
                newInPersonAr["InPerson"+(i+1)] = document.getElementsByName("InPerson"+(i))[0].value;
            }
            else{
                newInPersonAr["InPerson"+(i+1)] = inPersonObject.inPerson[i];
            }
        }
        formObject.updatedInPerson =  Object.values(newInPersonAr);
        API.updatePerson({
            IP: formObject.updatedInPerson,
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
            Marketing In Person Tactics
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {inPersonList()}
                </ol>
            </Form>
            <Button onClick={addInPerson}> Add Tactic</Button>
            <Button onClick={inPersonSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateInPerson;