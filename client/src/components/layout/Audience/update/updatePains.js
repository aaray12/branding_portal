import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdatePains(props) {
    const [formObject, setFormObject] = React.useState({})
    const [painsObject, setPainsObject] = React.useState({pains: props.audPains})
    const [painsName, setPainsName] = React.useState()

    function handlePainsName(event){
        const { name, value } = event.target;
        setPainsName({...painsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function painsList() {
        let pains = []
        if (painsObject.pains.length == 0) {
            pains.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < painsObject.pains.length; i++){
               var painsName = "Pains" + i
                pains.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={painsObject.pains[i]} name={painsName} onChange={handlePainsName}/>
                    </Form.Group>
                    <Button onClick = {deletePains} name ={painsObject.pains[i]} >X</Button>
                </li>)
            }
        }
        return(pains)
    }
    function addPains(){
        painsObject.pains.push("New Pain")
        // console.log(ArchObject.messages)
    }
    function deletePains(event){
        const { name} = event.target;
        var index = painsObject.pains.indexOf(name)

        if(index > -1){
            painsObject.pains.splice(index, 1);
        }
    }
    function painsSave(event){
        event.preventDefault()
        let newPainsAr = {};
        for(var i = 0; i < painsObject.pains.length; i ++){
            if(document.getElementsByName("Pains"+(i))[0].value){
                newPainsAr["Pains"+(i+1)] = document.getElementsByName("Pains"+(i))[0].value;
            }
            else{
                newPainsAr["Pains"+(i+1)] = painsObject.pains[i];
            }
        }
        formObject.updatedPains =  Object.values(newPainsAr);
        API.updatePains({
            pains: formObject.updatedPains,
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
                {props.rank} Audience Jobs to be Done
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {painsList()}
                </ol>
            </Form>
            <Button onClick={addPains}> Add Pain</Button>
            <Button onClick={painsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdatePains;