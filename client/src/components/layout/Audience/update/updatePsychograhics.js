import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdatePsychograhics(props) {
    const [formObject, setFormObject] = React.useState({})
    const [psychograhicsObject, setPsychograhicsObject] = React.useState({psychograhics: props.audPsychograhics})
    const [psychograhicsName, setPsychograhicsName] = React.useState()

    function handlePsychograhicsName(event){
        const { name, value } = event.target;
        setPsychograhicsName({...psychograhicsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function psychograhicsList() {
        let psychograhics = []
        if (psychograhicsObject.psychograhics.length == 0) {
            psychograhics.push(<li>
                <p>Click Add psychograhics to save new psychograhics</p>
            </li>)
        }
        else{
            for( var i = 0; i < psychograhicsObject.psychograhics.length; i++){
               var psychograhicsName = "Psychograhics" + i
                psychograhics.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={psychograhicsObject.psychograhics[i]} name={psychograhicsName} onChange={handlePsychograhicsName}/>
                    </Form.Group>
                    <Button onClick = {deletePsychograhics} name ={psychograhicsObject.psychograhics[i]} >X</Button>
                </li>)
            }
        }
        return(psychograhics)
    }
    function addPsychograhics(){
        psychograhicsObject.psychograhics.push("New Psychograhic")
        // console.log(ArchObject.messages)
    }
    function deletePsychograhics(event){
        const { name} = event.target;
        var index = psychograhicsObject.psychograhics.indexOf(name)

        if(index > -1){
            psychograhicsObject.psychograhics.splice(index, 1);
        }
    }
    function psychograhicsSave(event){
        event.preventDefault()
        let newPsychograhicsAr = {};
        for(var i = 0; i < psychograhicsObject.psychograhics.length; i ++){
            if(document.getElementsByName("Psychograhics"+(i))[0].value){
                newPsychograhicsAr["Psychograhics"+(i+1)] = document.getElementsByName("Psychograhics"+(i))[0].value;
            }
            else{
                newPsychograhicsAr["Psychograhics"+(i+1)] = psychograhicsObject.psychograhics[i];
            }
        }
        formObject.updatedPsychograhics =  Object.values(newPsychograhicsAr);
        API.updatePsychographics({
            psychograhics: formObject.updatedPsychograhics,
            BI: props.BI,
            rank: props.rank,
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
                {props.rank} Audience Psychographics
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {psychograhicsList()}
                </ol>
            </Form>
            <Button onClick={addPsychograhics}> Add Psychographic</Button>
            <Button onClick={psychograhicsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdatePsychograhics;