import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateDigital(props) {
    const [formObject, setFormObject] = React.useState({})
    const [digitalObject, setDigitalObject] = React.useState({digital: props.digital})
    const [digitalName, setDigitalName] = React.useState()

    function handleDigitalName(event){
        const { name, value } = event.target;
        setDigitalName({...digitalName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function digitalList() {
        let digital = []
        if (digitalObject.digital.length == 0) {
            digital.push(<li>
                <p>Click Add Digital to save new Digital</p>
            </li>)
        }
        else{
            for( var i = 0; i < digitalObject.digital.length; i++){
               var digitalName = "Digital" + i
                digital.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={digitalObject.digital[i]} name={digitalName} onChange={handleDigitalName}/>
                    </Form.Group>
                    <Button onClick = {deleteDigital} name ={digitalObject.digital[i]} >X</Button>
                </li>)
            }
        }
        return(digital)
    }
    function addDigital(){
        digitalObject.digital.push("New Digital")
        // console.log(ArchObject.messages)
    }
    function deleteDigital(event){
        const { name} = event.target;
        var index = digitalObject.digital.indexOf(name)

        if(index > -1){
            digitalObject.digital.splice(index, 1);
        }
    }
    function digitalSave(event){
        event.preventDefault()
        let newDigitalAr = {};
        for(var i = 0; i < digitalObject.digital.length; i ++){
            if(document.getElementsByName("Digital"+(i))[0].value){
                newDigitalAr["Digital"+(i+1)] = document.getElementsByName("Digital"+(i))[0].value;
            }
            else{
                newDigitalAr["Digital"+(i+1)] = digitalObject.digital[i];
            }
        }
        formObject.updatedDigital =  Object.values(newDigitalAr);
        API.updateDigital({
            digital: formObject.updatedDigital,
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
            Marketing Digitals
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {digitalList()}
                </ol>
            </Form>
            <Button onClick={addDigital}> Add Digital</Button>
            <Button onClick={digitalSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateDigital;