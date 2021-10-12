import React from "react";
import API from "../../utils/API"
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';


function BrandSettings(props) {
    
    const [formObject, setFormObject] = React.useState({})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })

    }
    let currentBrand;
    currentBrand= props.brands
    for (var i =0; i< currentBrand.length; i++){
        if(currentBrand[i].brandName == props.brand){
            currentBrand = currentBrand[i]
        }
    }
   
    function userOptions() {
        let userOptionsAr = []
        userOptionsAr.push(<option>none</option>)
        // console.log(currentBrand)
        for (var w = 0; w < props.users.length; w++) {
            if(props.users[w].name !== props.name){
            userOptionsAr.push(
                <option>{props.users[w].name}</option>
            )}
        }
        return (userOptionsAr)
    }
    function afterSelect() {
        if (formObject.userChoice) {
            return (
                <h4>{formObject.userChoice}</h4>
            )
        }
        else {
            return (
                <h4>Select User</h4>
            )
        }
    }
// console.log(props)
    function changeAddNew(message) {
        setFormObject({ ...formObject, "addNew": message })
    }
    function newUserAccess() {
        function handleSave(e){
            e.preventDefault();
           let selectedUser = formObject.userChoice
           let selectedUserID;
           let selectedUserName;
        //    console.log(props)
           for(var y = 0; y < props.users.length; y++){
               if(props.users[y].name== selectedUser){
                   selectedUserID = props.users[y]._id
                   selectedUserName = props.users[y].name
               }
           }
        //    console.log(selectedUser)
        // console.log(e.target.name)
           if(e.target.name=="ro")
       {   console.log("hit") 
           API.giveReadAccess({
               accessID: selectedUserID,
               brand: currentBrand
           })}
           else if(e.target.name=="rw"){
               console.log("hit")
               let BI;
               for(var t = 0; t< props.brands.length;t++){
                    if(currentBrand.brandName == props.brands[t].brandName){
                        BI = t
                    }
               }
            API.giveRWAccess({
                accessID: selectedUserID,
                rwName: selectedUserName,
                userID: props.userID,
                brand: currentBrand,
                brandName: currentBrand.brandName,
                BI: BI
            })
           }
        }
        if (formObject.addNew == "RW") {
            return (
                <>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose User for Reading and Writing Access</Form.Label>
                        <Form.Control as="select" name="userChoice" onChange={handleInputChange}>
                            {userOptions()}
                        </Form.Control>
                    </Form.Group>
                    {afterSelect()}
                    <Button name = "rw" variant="primary" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" onClick={() => changeAddNew("")}>Close</Button>
                </>
            )
        }
        else if (formObject.addNew == "RO") {
            return (
                <>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Choose User for Read Only Access</Form.Label>
                        <Form.Control as="select" name="userChoice" onChange={handleInputChange}>
                            <option>none</option>
                            {userOptions()}
                        </Form.Control>
                    </Form.Group>
                    {afterSelect()}
                    <Button variant="primary" name ="ro"onClick={handleSave}>Save</Button>
                    <Button variant="secondary" onClick={() => changeAddNew("")}>Close</Button>
                </>
            )
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Brand Settings
                    {/* {console.log(props.users)} */}
                </Modal.Title>
            </Modal.Header >
            <Modal.Body>
                <h4>Access</h4>
                <Row>
                    <Col>
                        <h5>Read & Write</h5>
                        <Button onClick={() => changeAddNew("RW")}>Add User</Button>
                    </Col>
                    <Col>
                        <h5>Read Only</h5>
                        <Button onClick={() => changeAddNew("RO")}>Add User</Button>
                    </Col>
                </Row>
                {newUserAccess()}
                {/* {console.log(formObject)} */}
            </Modal.Body>
        </Modal>
    )
}

export default BrandSettings;