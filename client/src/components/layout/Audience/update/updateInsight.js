import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateInsights(props) {
    const [formObject, setFormObject] = React.useState({})
    const [insightsObject, setInsightsObject] = React.useState({insights: props.audInsights})
    const [insightsName, setInsightsName] = React.useState()

    function handleInsightsName(event){
        const { name, value } = event.target;
        setInsightsName({...insightsName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function insightsList() {
        let insights = []
        if (insightsObject.insights.length == 0) {
            insights.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < insightsObject.insights.length; i++){
               var insightsName = "Insights" + i
                insights.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={insightsObject.insights[i]} name={insightsName} onChange={handleInsightsName}/>
                    </Form.Group>
                    <Button onClick = {deleteInsights} name ={insightsObject.insights[i]} >X</Button>
                </li>)
            }
        }
        return(insights)
    }
    function addInsights(){
        insightsObject.insights.push("New Insights")
        // console.log(ArchObject.messages)
    }
    function deleteInsights(event){
        const { name} = event.target;
        var index = insightsObject.insights.indexOf(name)

        if(index > -1){
            insightsObject.insights.splice(index, 1);
        }
    }
    function insightsSave(event){
        event.preventDefault()
        let newInsightsAr = {};
        for(var i = 0; i < insightsObject.insights.length; i ++){
            if(document.getElementsByName("Insights"+(i))[0].value){
                newInsightsAr["Insights"+(i+1)] = document.getElementsByName("Insights"+(i))[0].value;
            }
            else{
                newInsightsAr["Insights"+(i+1)] = insightsObject.insights[i];
            }
        }
        formObject.updatedInsights =  Object.values(newInsightsAr);
        API.updateInsights({
            insights: formObject.updatedInsights,
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
                {props.rank} Audience Insights
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {insightsList()}
                </ol>
            </Form>
            <Button onClick={addInsights}> Add Insight</Button>
            <Button onClick={insightsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateInsights;