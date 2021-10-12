import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateOther(props) {
    const [formObject, setFormObject] = React.useState({})
    const [otherObject, setOtherObject] = React.useState({other: props.other})
    const [otherName, setOtherName] = React.useState()

    function handleOtherName(event){
        const { name, value } = event.target;
        setOtherName({...otherName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function otherList() {
        let other = []
        if (otherObject.other.length == 0) {
            other.push(<li>
                <p>Click Add Tactic to save new Other Tactic</p>
            </li>)
        }
        else{
            for( var i = 0; i < otherObject.other.length; i++){
               var otherName = "Other" + i
                other.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={otherObject.other[i]} name={otherName} onChange={handleOtherName}/>
                    </Form.Group>
                    <Button onClick = {deleteOther} name ={otherObject.other[i]} >X</Button>
                </li>)
            }
        }
        return(other)
    }
    function addOther(){
        otherObject.other.push("New Other")
        // console.log(ArchObject.messages)
    }
    function deleteOther(event){
        const { name} = event.target;
        var index = otherObject.other.indexOf(name)

        if(index > -1){
            otherObject.other.splice(index, 1);
        }
    }
    function otherSave(event){
        event.preventDefault()
        let newOtherAr = {};
        for(var i = 0; i < otherObject.other.length; i ++){
            if(document.getElementsByName("Other"+(i))[0].value){
                newOtherAr["Other"+(i+1)] = document.getElementsByName("Other"+(i))[0].value;
            }
            else{
                newOtherAr["Other"+(i+1)] = otherObject.other[i];
            }
        }
        formObject.updatedOther =  Object.values(newOtherAr);
        API.updateOther({
            other: formObject.updatedOther,
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
            Marketing Other Tactics
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {otherList()}
                </ol>
            </Form>
            <Button onClick={addOther}> Add Other</Button>
            <Button onClick={otherSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateOther;