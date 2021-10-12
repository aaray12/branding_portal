import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateGains(props) {
    const [formObject, setFormObject] = React.useState({})
    const [gainsObject, setGainsObject] = React.useState({gains: props.audGains})
    const [gainsName, setGainsName] = React.useState()

    function handleGainsName(event){
        const { name, value } = event.target;
        setGainsName({...gainsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function gainsList() {
        let gains = []
        if (gainsObject.gains.length == 0) {
            gains.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < gainsObject.gains.length; i++){
               var gainsName = "Gains" + i
                gains.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={gainsObject.gains[i]} name={gainsName} onChange={handleGainsName}/>
                    </Form.Group>
                    <Button onClick = {deleteGains} name ={gainsObject.gains[i]} >X</Button>
                </li>)
            }
        }
        return(gains)
    }
    function addGains(){
        gainsObject.gains.push("New Gain")
        // console.log(ArchObject.messages)
    }
    function deleteGains(event){
        const { name} = event.target;
        var index = gainsObject.gains.indexOf(name)

        if(index > -1){
            gainsObject.gains.splice(index, 1);
        }
    }
    function gainsSave(event){
        event.preventDefault()
        let newGainsAr = {};
        for(var i = 0; i < gainsObject.gains.length; i ++){
            if(document.getElementsByName("Gains"+(i))[0].value){
                newGainsAr["Gains"+(i+1)] = document.getElementsByName("Gains"+(i))[0].value;
            }
            else{
                newGainsAr["Gains"+(i+1)] = gainsObject.gains[i];
            }
        }
        formObject.updatedGains =  Object.values(newGainsAr);
        API.updateGains({
            gains: formObject.updatedGains,
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
                {props.rank} Audience Gains
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {gainsList()}
                </ol>
            </Form>
            <Button onClick={addGains}> Add Gain</Button>
            <Button onClick={gainsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateGains;