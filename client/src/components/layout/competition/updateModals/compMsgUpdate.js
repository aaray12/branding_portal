import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function CompMsgUpdate(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [formObject, setFormObject] = React.useState({})
    const [msgObject, setMsgObject] = React.useState({messages: props.compMessages})
    const [msgName, setMsgName] = React.useState()

    function handleMsgName(event){
        const { name, value } = event.target;
        setMsgName({...msgName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function msgList() {
        let messages = []
        if (msgObject.messages.length == 0) {
            messages.push(<li>
                <p>Click Add Meesage to save new messages</p>
            </li>)
        }
        else{
            for( var i = 0; i < msgObject.messages.length; i++){
               var mName = "Messages" + i
                messages.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={msgObject.messages[i]} name={mName} onChange={handleMsgName}/>
                    </Form.Group>
                    <Button onClick = {deleteMsg} name ={msgObject.messages[i]} >X</Button>
                </li>)
            }
        }
        return(messages)
    }
    function addMsg(){
        msgObject.messages.push("New Messages")
        console.log(msgObject.messages)
    }
    function deleteMsg(event){
        const { name} = event.target;
        var index = msgObject.messages.indexOf(name)

        if(index > -1){
            msgObject.messages.splice(index, 1);
        }
    }
    function msgSave(event){
        event.preventDefault()
        let newMsgAr = {};
        for(var i = 0; i < msgObject.messages.length; i ++){
            if(document.getElementsByName("Messages"+(i))[0].value){
                newMsgAr["Messages"+(i+1)] = document.getElementsByName("Messages"+(i))[0].value;
            }
            else{
                newMsgAr["Messages"+(i+1)] = msgObject.messages[i];
            }
        }
        formObject.updatedMessages =  Object.values(newMsgAr);
        API.updateCompMsg({
            messages: formObject.updatedMessages,
            rank: props.rank,
            BI: props.brandid,
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
                {props.rank} Competitor Messages
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {msgList()}
                </ol>
            </Form>
            <Button onClick={addMsg}> Add Message</Button>
            <Button onClick={msgSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default CompMsgUpdate;