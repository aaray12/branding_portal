import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdatePrint(props) {
    const [formObject, setFormObject] = React.useState({})
    const [printObject, setPrintObject] = React.useState({print: props.print})
    const [printName, setPrintName] = React.useState()

    function handlePrintName(event){
        const { name, value } = event.target;
        setPrintName({...printName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function printList() {
        let print = []
        if (printObject.print.length == 0) {
            print.push(<li>
                <p>Click Add Tactic to save new Tactic</p>
            </li>)
        }
        else{
            for( var i = 0; i < printObject.print.length; i++){
               var printName = "Print" + i
                print.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={printObject.print[i]} name={printName} onChange={handlePrintName}/>
                    </Form.Group>
                    <Button onClick = {deletePrint} name ={printObject.print[i]} >X</Button>
                </li>)
            }
        }
        return(print)
    }
    function addPrint(){
        printObject.print.push("New Tactic")
        // console.log(ArchObject.messages)
    }
    function deletePrint(event){
        const { name} = event.target;
        var index = printObject.print.indexOf(name)

        if(index > -1){
            printObject.print.splice(index, 1);
        }
    }
    function printSave(event){
        event.preventDefault()
        let newPrintAr = {};
        for(var i = 0; i < printObject.print.length; i ++){
            if(document.getElementsByName("Print"+(i))[0].value){
                newPrintAr["Print"+(i+1)] = document.getElementsByName("Print"+(i))[0].value;
            }
            else{
                newPrintAr["Print"+(i+1)] = printObject.print[i];
            }
        }
        formObject.updatedPrint =  Object.values(newPrintAr);
        API.updatePrint({
            prints: formObject.updatedPrint,
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
             Tactics
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {printList()}
                </ol>
            </Form>
            <Button onClick={addPrint}> Add Tactic</Button>
            <Button onClick={printSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdatePrint;