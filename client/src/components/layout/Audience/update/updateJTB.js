import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateJTB(props) {
    const [formObject, setFormObject] = React.useState({})
    const [jtbObject, setJTBObject] = React.useState({jtbs: props.audJTB})
    const [jtbName, setJTBName] = React.useState()

    function handleJTBName(event){
        const { name, value } = event.target;
        setJTBName({...jtbName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function jtbList() {
        let jtbs = []
        if (jtbObject.jtbs.length == 0) {
            jtbs.push(<li>
                <p>Click Add jtbetype to save new jtbetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < jtbObject.jtbs.length; i++){
               var jtbName = "JTBs" + i
                jtbs.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={jtbObject.jtbs[i]} name={jtbName} onChange={handleJTBName}/>
                    </Form.Group>
                    <Button onClick = {deleteJTB} name ={jtbObject.jtbs[i]} >X</Button>
                </li>)
            }
        }
        return(jtbs)
    }
    function addJTB(){
        jtbObject.jtbs.push("New Job")
        // console.log(ArchObject.messages)
    }
    function deleteJTB(event){
        const { name} = event.target;
        var index = jtbObject.jtbs.indexOf(name)

        if(index > -1){
            jtbObject.jtbs.splice(index, 1);
        }
    }
    function jtbSave(event){
        event.preventDefault()
        let newJTBAr = {};
        for(var i = 0; i < jtbObject.jtbs.length; i ++){
            if(document.getElementsByName("JTBs"+(i))[0].value){
                newJTBAr["JTBs"+(i+1)] = document.getElementsByName("JTBs"+(i))[0].value;
            }
            else{
                newJTBAr["JTBs"+(i+1)] = jtbObject.jtbs[i];
            }
        }
        formObject.updatedJTBs =  Object.values(newJTBAr);
        API.updateJTB({
            jtbs: formObject.updatedJTBs,
            rank: props.rank,
            BI: props.BI,
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
                {jtbList()}
                </ol>
            </Form>
            <Button onClick={addJTB}> Add Job</Button>
            <Button onClick={jtbSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateJTB;