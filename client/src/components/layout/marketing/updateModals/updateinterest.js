import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateInterest(props) {
    const [formObject, setFormObject] = React.useState({})
    const [interestObject, setInterestObject] = React.useState({interest: props.interest})
    const [interestName, setInterestName] = React.useState()

    function handleInterestName(event){
        const { name, value } = event.target;
        setInterestName({...interestName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function interestList() {
        let interest = []
        if (interestObject.interest.length == 0) {
            interest.push(<li>
                <p>Click Add Interest to save new Interest</p>
            </li>)
        }
        else{
            for( var i = 0; i < interestObject.interest.length; i++){
               var interestName = "Interest" + i
                interest.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={interestObject.interest[i]} name={interestName} onChange={handleInterestName}/>
                    </Form.Group>
                    <Button onClick = {deleteInterest} name ={interestObject.interest[i]} >X</Button>
                </li>)
            }
        }
        return(interest)
    }
    function addInterest(){
        interestObject.interest.push("New Interest")
        // console.log(ArchObject.messages)
    }
    function deleteInterest(event){
        const { name} = event.target;
        var index = interestObject.interest.indexOf(name)

        if(index > -1){
            interestObject.interest.splice(index, 1);
        }
    }
    function interestSave(event){
        event.preventDefault()
        let newInterestAr = {};
        for(var i = 0; i < interestObject.interest.length; i ++){
            if(document.getElementsByName("Interest"+(i))[0].value){
                newInterestAr["Interest"+(i+1)] = document.getElementsByName("Interest"+(i))[0].value;
            }
            else{
                newInterestAr["Interest"+(i+1)] = interestObject.interest[i];
            }
        }
        formObject.updatedInterest =  Object.values(newInterestAr);
        API.updateInterest({
            interests: formObject.updatedInterest,
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
            Marketing Interests
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {interestList()}
                </ol>
            </Form>
            <Button onClick={addInterest}> Add Interest</Button>
            <Button onClick={interestSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateInterest;