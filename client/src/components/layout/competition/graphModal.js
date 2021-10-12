import React from "react";
import { Modal, Button, Form, Col } from 'react-bootstrap';
import API from "../../../utils/API"
function GraphModal(props) {
    const [formObject, setFormObject] = React.useState({ labels: [], scores: {} })
    const [labelObject, setLabelObject] = React.useState([{ LabelOption: 0 }])
    const [labelName, setLabelName] = React.useState({})
    const [scores, setScores] = React.useState({})
    // const [newPhoto, setNewPhoto] = useState(
    //     {
    //         photo: '',
    //     }
    // );

    var brandObj = props.brandInfo[props.BI]

    function getScores(name) {
        var Labels = Object.values(labelName);
        var scoreAr = [];
        for (var i = 0; i < Labels.length; i++) {
            scoreAr.push(
                <Form.Group controlId="exampleForm.ControlSelect1" key={"score" + i}>
                    <Form.Label key={"testkeys" + i}>Score {Labels[i]}</Form.Label>
                    <Form.Control name={name + "score" + (i + 1)} as="select" defaultValue="Set score" onChange={handleScore} key={"oprionlists" + i}>
                        <option>Set score</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            )
        }
        // console.log("sar:"+Object.values(labelName))
        return (
            <>
                <h5>{name}</h5>
                {scoreAr}
            </>
        )

    }
    // var name = props.brandInfo[0].brandName
    function handleLabelChange(event) {
        const { name, value } = event.target;
        setLabelObject({ ...formObject, [name]: value })
        //console.log(formObject)

    };
    function ValueOptions(value) {
        let valueAr = [];
        if (value > 0) {
            for (var i = 0; i < value; i++) {
                valueAr.push(
                    <li key={i}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder={"Label" + " " + (valueAr.length + 1)} name={"Label" + (valueAr.length + 1)} onChange={handleLabelName} />
                        </Form.Group>
                    </li>
                )
            }
            return (valueAr)
        }
        else {
            return (
                <p>No Labels Added</p>
            )
        }
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })


    };

    function handleLabelName(event) {
        const { name, value } = event.target;
        setLabelName({ ...labelName, [name]: value })
        // console.log(Object.values(valueName))
    }
    function handleScore(event) {
        const { name, value } = event.target;

        setScores({ ...scores, [name]: value })


        // console.log(scores)
    }
    function displayScores() {
        var scoreDis = [];
        var rank= Object.values(brandObj.competition?brandObj.competition:[])
        scoreDis.push(getScores(brandObj.brandName))
        for (var i = 0; i < rank.length; i++) {
            scoreDis.push(getScores(rank[i].compName))
        }
        // console.log( rank[0].compName)
        return (scoreDis)
    }
    function saveGraphInput() {
        var rank= Object.values(brandObj.competition?brandObj.competition:[])
        var saveS = [];
        Object.keys(scores).forEach(e => {
            if (e.startsWith(brandObj.brandName)) {
                // console.log(e)
                saveS.push(scores[e])
                // console.log(saveS)
                if ([brandObj.brandName + "scores"] in formObject.scores == false) {
                    formObject.scores[brandObj.brandName + "scores"] = saveS
                }

            }
        })
        saveS = []
        //   setFormObject({... formObject, [brandObj.brandName + "scores"]: saveS})
        for (var i = 0; i < rank.length; i++) {
            Object.keys(scores).forEach(e => {
                if (e.startsWith(rank[i].compName)) {
                    saveS.push(scores[e])
                    if ([rank[i].compName + "scores"] in formObject.scores == false) {
                        formObject.scores[rank[i].compName + "scores"] = saveS
                    }

                }
            })
            //   setFormObject({... formObject, [brandObj.competition[i].compName + "scores"]: saveS})
            saveS = []
        }
        formObject.labels = Object.values(labelName)
        // console.log(formObject.labels)
        API.saveGraph({
            BI: props.brandInfo[props.BI].originIndex,
            userid: props.userid,
            scores: formObject.scores,
            labels: formObject.labels,
        })
        props.onHide()
    }
   console.log(props.userid)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Graph Input
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* <Form.Group controlId="formGroupEmail">
                        <Form.Label>Brand Name</Form.Label>
                        <Form.Control type="name" placeholder="name" name="brandname" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mission Statement</Form.Label>
                        <Form.Control as="textarea" rows={3} name = "mission" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Vision</Form.Label>
                        <Form.Control as="textarea" rows={3} name = "vision" onChange={handleInputChange}/>
                    </Form.Group> */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many labels do you want to add?</Form.Label>
                        <Form.Control name="LabelOption" as="select" onChange={handleLabelChange}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>
                    <div>
                        <h3>Labels:</h3>
                        <ol>
                            {ValueOptions(labelObject.LabelOption)}
                        </ol>

                    </div>

                    {displayScores()}

                </Form>
                {/* { console.log(testObj.brandName)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveGraphInput}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default GraphModal;