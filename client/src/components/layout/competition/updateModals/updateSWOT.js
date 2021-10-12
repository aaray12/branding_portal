import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function SWOTUpdateModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [formObject, setFormObject] = React.useState({})

    const [strengthObject, setStrengthObject] = React.useState({strengths: props.compInfo.swot.strengths})
    const [weaknessObject, setWeaknessObject] = React.useState({weaknesses: props.compInfo.swot.weaknesses})
    const [oppertunitiesObject, setOppertunitiesObject] = React.useState({oppertunities: props.compInfo.swot.oppertunities})
    const [threadsObject, setThreadsObject] = React.useState({threads: props.compInfo.swot.threads})
    // if(props.compInfo.swot.strengths.length > 0){
    //    let strengthAr =props.compInfo.swot.strengths;
    //    strengthObject.strengths=strengthAr
    // //    console.log(strengthObject)
    // }
    const [strengthName, setStrengthName] = React.useState()
    const [weaknessName, setWeaknessName] = React.useState()
    const [oppertunityName, setOppertunityName] = React.useState()
    const [threadName, setThreadName] = React.useState()
    // console.log(props)
    function handleStrengthName(event){
        const { name, value } = event.target;
        setStrengthName({...strengthName, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleWeaknessName(event){
        const { name, value } = event.target;
        setWeaknessName({...weaknessName, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleOppertunityName(event){
        const { name, value } = event.target;
        setOppertunityName({...oppertunityName, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleThreadName(event){
        const { name, value } = event.target;
        setThreadName({...threadName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function strengthList() {
        let strengths = []
        if (strengthObject.strengths.length == 0) {
            strengths.push(<li>
                <p>No Strengths Saved</p>
            </li>)
        }
        else{
            for( var i = 0; i < strengthObject.strengths.length; i++){
               var sName = "Strength" + i
                strengths.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={strengthObject.strengths[i]} name={sName} onChange={handleStrengthName}/>
                    </Form.Group>
                    <Button onClick = {deleteStrength} name ={strengthObject.strengths[i]} >X</Button>
                </li>)
            }
        }
        return(strengths)
    }
    function addStrength(){
        strengthObject.strengths.push("New Strength")
        console.log(strengthObject.strengths)
    }
    function deleteStrength(event){
        const { name} = event.target;
        var index = strengthObject.strengths.indexOf(name)

        if(index > -1){
            strengthObject.strengths.splice(index, 1);
        }
    }
    function weaknessList() {
        let weaknesses = []
       
        if (weaknessObject.weaknesses.length == 0) {
            weaknesses.push(<li>
                <p>No Weaknesses Saved</p>
            </li>)
        }
        else{
            for( var i = 0; i < weaknessObject.weaknesses.length; i++){
               var wName = "Weakness" + i
                weaknesses.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={weaknessObject.weaknesses[i]} name={wName} onChange={handleWeaknessName}/>
                    </Form.Group>
                    <Button onClick = {deleteWeakness} name ={weaknessObject.weaknesses[i]} >X</Button>
                </li>)
            }
        }
        return(weaknesses)
    }
    function addWeakness(){
        weaknessObject.weaknesses.push("New Weakness")
        console.log(weaknessObject.weaknesses)
    }
    function deleteWeakness(event){
        const { name} = event.target;
        var index = weaknessObject.weaknesses.indexOf(name)

        if(index > -1){
            weaknessObject.weaknesses.splice(index, 1);
        }
    }
    function oppertunityList() {
        let oppertunities = []
       
        if (oppertunitiesObject.oppertunities.length == 0) {
            oppertunities.push(<li>
                <p>No Oppertunities Saved</p>
            </li>)
        }
        else{
            for( var i = 0; i < oppertunitiesObject.oppertunities.length; i++){
               var oName = "Oppertunity" + i
                oppertunities.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={oppertunitiesObject.oppertunities[i]} name={oName} onChange={handleOppertunityName}/>
                    </Form.Group>
                    <Button onClick = {deleteOppertunity} name ={oppertunitiesObject.oppertunities[i]} >X</Button>
                </li>)
            }
        }
        return(oppertunities)
    }
    function addOppertunity(){
        oppertunitiesObject.oppertunities.push("New Oppertunity")
        // console.log(weaknessObject.weaknesses)
    }
    function deleteOppertunity(event){
        const { name} = event.target;
        var index = oppertunitiesObject.oppertunities.indexOf(name)

        if(index > -1){
            oppertunitiesObject.oppertunities.splice(index, 1);
        }
    }
    function threadList() {
        let threads = []
       
        if (threadsObject.threads.length == 0) {
            threads.push(<li>
                <p>No Threads Saved</p>
            </li>)
        }
        else{
            for( var i = 0; i < threadsObject.threads.length; i++){
               var tName = "Thread" + i
                threads.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={threadsObject.threads[i]} name={tName} onChange={handleThreadName}/>
                    </Form.Group>
                    <Button onClick = {deleteThread} name ={threadsObject.threads[i]} >X</Button>
                </li>)
            }
        }
        return(threads)
    }
    function addThread(){
        threadsObject.threads.push("New Thread")
        // console.log(weaknessObject.weaknesses)
    }
    function deleteThread(event){
        const { name} = event.target;
        var index = threadsObject.threads.indexOf(name)

        if(index > -1){
            threadsObject.threads.splice(index, 1);
        }
    }
    function strengthSave(){
        console.log(strengthName)
        let newSAr = {};
        let newWAr = {};
        let newOAr = {};
        let newTAr = {};
        // console.log(formObject.updatedValues)
        for(var i = 0; i < strengthObject.strengths.length; i ++){
            if(document.getElementsByName("Strength"+(i))[0].value){
                newSAr["Strength"+(i+1)] = document.getElementsByName("Strength"+(i))[0].value;
            }
            else{
                newSAr["Strength"+(i+1)] = strengthObject.strengths[i];
            }
        }
        for(var i = 0; i < weaknessObject.weaknesses.length; i ++){
            if(document.getElementsByName("Weakness"+(i))[0].value){
                newWAr["Weakness"+(i+1)] = document.getElementsByName("Weakness"+(i))[0].value;
            }
            else{
                newWAr["Weakness"+(i+1)] = weaknessObject.weaknesses[i];
            }
        }
        for(var i = 0; i < oppertunitiesObject.oppertunities.length; i ++){
            if(document.getElementsByName("Oppertunity"+(i))[0].value){
                newOAr["Oppertunity"+(i+1)] = document.getElementsByName("Oppertunity"+(i))[0].value;
            }
            else{
                newOAr["Oppertunity"+(i+1)] = oppertunitiesObject.oppertunities[i];
            }
        }
        for(var i = 0; i < threadsObject.threads.length; i ++){
            if(document.getElementsByName("Thread"+(i))[0].value){
                newTAr["Thread"+(i+1)] = document.getElementsByName("Thread"+(i))[0].value;
            }
            else{
                newTAr["Thread"+(i+1)] = threadsObject.threads[i];
            }
        }
        formObject.updatedStrengths =  Object.values(newSAr);
        formObject.updatedWeaknesses =  Object.values(newWAr);
        formObject.updatedOppertunities =  Object.values(newOAr);
        formObject.updatedThreads =  Object.values(newTAr);
        // setFormObject({updatedStrengths: Object.values(newAr) })
        console.log(formObject)
        API.updateCompSWOT({
            rank: props.rank,
            updatedSWOT: {
                strengths: formObject.updatedStrengths,
                weaknesses: formObject.updatedWeaknesses,
                oppertunities: formObject.updatedOppertunities,
                threads: formObject.updatedThreads,
                },
            BI: props.brandid,
            userid:props.userid
        })
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.rank} Competitor S/W/O/T
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h3>Stregnths</h3>
                <Form>
                    <ol>
                    {strengthList()}
                    </ol>
                </Form>
                <Button onClick={addStrength}> Add Strength</Button>
                {/* <p>{props.mission}</p> */}
            <h3>Weaknesses</h3>
                <Form>
                    <ol>
                    {weaknessList()}
                    </ol>
                </Form>
                <Button onClick={addWeakness}>Add Weakness</Button>
                <h3>Oppertunities</h3>
                <Form>
                    <ol>
                    {oppertunityList()}
                    </ol>
                </Form>
                <Button onClick={addOppertunity}>Add Oppertunity</Button>
                <h3>Threads</h3>
                <Form>
                    <ol>
                    {threadList()}
                    </ol>
                </Form>
                <Button onClick={addThread}>Add Threads</Button>
                <Button onClick={strengthSave}> Update</Button>
            </Modal.Body>
        </Modal>

    )
}

export default SWOTUpdateModal;