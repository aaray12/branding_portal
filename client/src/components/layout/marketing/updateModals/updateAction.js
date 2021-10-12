import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateAction(props) {
    const [formObject, setFormObject] = React.useState({})
    const [actionObject, setActionObject] = React.useState({action: props.action})
    const [actionName, setActionName] = React.useState()

    function handleActionName(event){
        const { name, value } = event.target;
        setActionName({...actionName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function actionList() {
        let action = []
        if (actionObject.action.length == 0) {
            action.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < actionObject.action.length; i++){
               var actionName = "Action" + i
                action.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={actionObject.action[i]} name={actionName} onChange={handleActionName}/>
                    </Form.Group>
                    <Button onClick = {deleteAction} name ={actionObject.action[i]} >X</Button>
                </li>)
            }
        }
        return(action)
    }
    function addAction(){
        actionObject.action.push("New Action")
        // console.log(ArchObject.messages)
    }
    function deleteAction(event){
        const { name} = event.target;
        var index = actionObject.action.indexOf(name)

        if(index > -1){
            actionObject.action.splice(index, 1);
        }
    }
    function actionSave(event){
        event.preventDefault()
        let newActionAr = {};
        for(var i = 0; i < actionObject.action.length; i ++){
            if(document.getElementsByName("Action"+(i))[0].value){
                newActionAr["Action"+(i+1)] = document.getElementsByName("Action"+(i))[0].value;
            }
            else{
                newActionAr["Action"+(i+1)] = actionObject.action[i];
            }
        }
        formObject.updatedAction =  Object.values(newActionAr);
        API.updateAction({
            actions: formObject.updatedAction,
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
            Actiones
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {actionList()}
                </ol>
            </Form>
            <Button onClick={addAction}> Add Action</Button>
            <Button onClick={actionSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateAction;