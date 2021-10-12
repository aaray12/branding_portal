import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function AudArchUpdate(props) {
    const [formObject, setFormObject] = React.useState({})
    const [archObject, setArchObject] = React.useState({archs: props.audArchs})
    const [archName, setArchName] = React.useState()

    function handleArchName(event){
        const { name, value } = event.target;
        setArchName({...archName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function archList() {
        let archs = []
        if (archObject.archs.length == 0) {
            archs.push(<li>
                <p>Click Add Archetype to save new archetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < archObject.archs.length; i++){
               var archName = "Archs" + i
                archs.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={archObject.archs[i]} name={archName} onChange={handleArchName}/>
                    </Form.Group>
                    <Button onClick = {deleteArch} name ={archObject.archs[i]} >X</Button>
                </li>)
            }
        }
        return(archs)
    }
    function addArch(){
        archObject.archs.push("New Archetype")
        // console.log(ArchObject.messages)
    }
    function deleteArch(event){
        const { name} = event.target;
        var index = archObject.archs.indexOf(name)

        if(index > -1){
            archObject.archs.splice(index, 1);
        }
    }
    function archSave(event){
        event.preventDefault()
        let newArchAr = {};
        for(var i = 0; i < archObject.archs.length; i ++){
            if(document.getElementsByName("Archs"+(i))[0].value){
                newArchAr["Archs"+(i+1)] = document.getElementsByName("Archs"+(i))[0].value;
            }
            else{
                newArchAr["Archs"+(i+1)] = archObject.archs[i];
            }
        }
        formObject.updatedArchs =  Object.values(newArchAr);
        API.updateAudArch({
            archs: formObject.updatedArchs,
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
                {props.rank} Audience Archetypes
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {archList()}
                </ol>
            </Form>
            <Button onClick={addArch}> Add Archetype</Button>
            <Button onClick={archSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default AudArchUpdate;