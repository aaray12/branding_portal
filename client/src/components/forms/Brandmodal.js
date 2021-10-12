import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from "../../utils/API"
function BrandModal(props) {
    const [formObject, setFormObject] = React.useState({values:[]})
    const [valueObject, setValueObject] = React.useState([{ValueOption: 0}])
    const [valueName, setValueName] = React.useState({})
    


    function handleValueChange(event) {
        const { name, value } = event.target;
        setValueObject({ ...formObject, [name]: value })
        //console.log(formObject)

    };
    function ValueOptions(value) {
        let valueAr = [];
        if (value > 0) {
            for (var i = 0; i < value; i++) {
                valueAr.push(
                    <li>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder={"Value" + " "+ (valueAr.length + 1)} name = {"Value" +(valueAr.length + 1)} onChange={handleValueName}/>
                        </Form.Group>
                    </li>
                )
            }
            return(valueAr)
        }
        else{
            return(
                <p>No Values Added</p>
            )
        }
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        

    };

    function handleSave(event) {
        
        
        formObject.values = Object.values(valueName);

        for(var i = 0; i < valueName.length; i++){
            formObject.values.push(valueName[i]);
        }
        let BI=props.brandInfo
        
        console.log(props.brandInfo)
        API.saveBrand({
            userId: props.userid,
            brandName: formObject.brandname,
            mission: "No Mission saved yet",
            vision: "No Vision saved yet",
            values:["No Values saved yet"],
            manifesto: "No Manifesto saved yet",
            competition: {comp1: "Add a Competitor"},
            originIndex: BI
        })
        props.onHide()
    };

    function handleValueName(event){
        const { name, value } = event.target;
        setValueName({...valueName, [name]: value})
        // console.log(Object.values(valueName))
    }
    // function test(){
    //     valueName
    // }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Brand Input
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Brand Name</Form.Label>
                        <Form.Control type="name" placeholder="name" name="brandname" onChange={handleInputChange}/>
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default BrandModal;