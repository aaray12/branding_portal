import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateDemographics(props) {
    const [formObject, setFormObject] = React.useState({})
    const [demographicsObject, setDemographicsObject] = React.useState({demographics: props.audDemographics})
    const [demographicsName, setDemographicsName] = React.useState()

    function handleDemographicsName(event){
        const { name, value } = event.target;
        setDemographicsName({...demographicsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function demographicsList() {
        let demographics = []
        if (demographicsObject.demographics.length == 0) {
            demographics.push(<li>
                <p>Click Add demographics to save new demographics</p>
            </li>)
        }
        else{
            for( var i = 0; i < demographicsObject.demographics.length; i++){
               var demographicsName = "Demographics" + i
                demographics.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={demographicsObject.demographics[i]} name={demographicsName} onChange={handleDemographicsName}/>
                    </Form.Group>
                    <Button onClick = {deleteDemographics} name ={demographicsObject.demographics[i]} >X</Button>
                </li>)
            }
        }
        return(demographics)
    }
    function addDemographics(){
        demographicsObject.demographics.push("New Demographic")
        // console.log(ArchObject.messages)
    }
    function deleteDemographics(event){
        const { name} = event.target;
        var index = demographicsObject.demographics.indexOf(name)

        if(index > -1){
            demographicsObject.demographics.splice(index, 1);
        }
    }
    function demographicsSave(event){
        event.preventDefault()
        let newDemographicsAr = {};
        for(var i = 0; i < demographicsObject.demographics.length; i ++){
            if(document.getElementsByName("Demographics"+(i))[0].value){
                newDemographicsAr["Demographics"+(i+1)] = document.getElementsByName("Demographics"+(i))[0].value;
            }
            else{
                newDemographicsAr["Demographics"+(i+1)] = demographicsObject.demographics[i];
            }
        }
        formObject.updatedDemographics =  Object.values(newDemographicsAr);
        API.updateDemographics({
            demographics: formObject.updatedDemographics,
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
                {props.rank} Audience Demographics
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {demographicsList()}
                </ol>
            </Form>
            <Button onClick={addDemographics}> Add Demographic</Button>
            <Button onClick={demographicsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateDemographics;