import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateSubStrat(props) {
    const [formObject, setFormObject] = React.useState({})
    const [subStratObject, setSubStratObject] = React.useState({subStrat: props.subStrat})
    const [subStratName, setSubStratName] = React.useState()

    function handleSubStratName(event){
        const { name, value } = event.target;
        setSubStratName({...subStratName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function subStratList() {
        let subStrat = []
        if (subStratObject.subStrat.length == 0) {
            subStrat.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < subStratObject.subStrat.length; i++){
               var subStratName = "SubStrat" + i
                subStrat.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={subStratObject.subStrat[i]} name={subStratName} onChange={handleSubStratName}/>
                    </Form.Group>
                    <Button onClick = {deleteSubStrat} name ={subStratObject.subStrat[i]} >X</Button>
                </li>)
            }
        }
        return(subStrat)
    }
    function addSubStrat(){
        subStratObject.subStrat.push("New Sub-Strategy")
        // console.log(ArchObject.messages)
    }
    function deleteSubStrat(event){
        const { name} = event.target;
        var index = subStratObject.subStrat.indexOf(name)

        if(index > -1){
            subStratObject.subStrat.splice(index, 1);
        }
    }
    function subStratSave(event){
        event.preventDefault()
        let newSubStratAr = {};
        for(var i = 0; i < subStratObject.subStrat.length; i ++){
            if(document.getElementsByName("SubStrat"+(i))[0].value){
                newSubStratAr["SubStrat"+(i+1)] = document.getElementsByName("SubStrat"+(i))[0].value;
            }
            else{
                newSubStratAr["SubStrat"+(i+1)] = subStratObject.subStrat[i];
            }
        }
        formObject.updatedSubStrat =  Object.values(newSubStratAr);
        API.updateSubStrat({
            subStrats: formObject.updatedSubStrat,
            BI: props.brandid,
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
                {props.rank} Audience SubStrat Infleunces
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {subStratList()}
                </ol>
            </Form>
            <Button onClick={addSubStrat}> Add Sub-Strategy</Button>
            <Button onClick={subStratSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateSubStrat;