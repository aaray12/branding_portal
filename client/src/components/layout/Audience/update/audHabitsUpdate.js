import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateHabits(props) {
    const [formObject, setFormObject] = React.useState({})
    const [habitsObject, setHabitsObject] = React.useState({habits: props.audHabits})
    const [habitsName, setHabitsName] = React.useState()

    function handleHabitsName(event){
        const { name, value } = event.target;
        setHabitsName({...habitsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function habitsList() {
        let habits = []
        if (habitsObject.habits.length == 0) {
            habits.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < habitsObject.habits.length; i++){
               var habitsName = "Habits" + i
                habits.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={habitsObject.habits[i]} name={habitsName} onChange={handleHabitsName}/>
                    </Form.Group>
                    <Button onClick = {deleteHabits} name ={habitsObject.habits[i]} >X</Button>
                </li>)
            }
        }
        return(habits)
    }
    function addHabits(){
        habitsObject.habits.push("New Habit")
        // console.log(ArchObject.messages)
    }
    function deleteHabits(event){
        const { name} = event.target;
        var index = habitsObject.habits.indexOf(name)

        if(index > -1){
            habitsObject.habits.splice(index, 1);
        }
    }
    function habitsSave(event){
        event.preventDefault()
        let newHabitsAr = {};
        for(var i = 0; i < habitsObject.habits.length; i ++){
            if(document.getElementsByName("Habits"+(i))[0].value){
                newHabitsAr["Habits"+(i+1)] = document.getElementsByName("Habits"+(i))[0].value;
            }
            else{
                newHabitsAr["Habits"+(i+1)] = habitsObject.habits[i];
            }
        }
        formObject.updatedHabits =  Object.values(newHabitsAr);
        API.updateHabits({
            habits: formObject.updatedHabits,
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
                {props.rank} Audience Habits Infleunces
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {habitsList()}
                </ol>
            </Form>
            <Button onClick={addHabits}> Add Habit</Button>
            <Button onClick={habitsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateHabits;