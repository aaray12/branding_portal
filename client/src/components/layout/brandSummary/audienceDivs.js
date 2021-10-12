import React from "react";
import { Card, Accordion, Row, Col } from 'react-bootstrap';
import "./brandSummaryComp.css"


function AudDivs(props) {

    function returnDivs() {
        function showPsychograhics(pyschObj) {
            let psychograhicsAr = []
            if (pyschObj[0] != undefined) {

                for (var i = 0; i < pyschObj.length; i++) {

                    psychograhicsAr.push(<li>
                        <p>{pyschObj[i]}</p>
                    </li>)
                }
                return (psychograhicsAr)
            }
            else {
                psychograhicsAr.push(<li>No Psychograhics are Saved</li>)
                return (psychograhicsAr)
            }
        }
        function showPains(curPains) {
            let painsAr = []
            if (curPains[0] != undefined) {

                for (var i = 0; i < curPains.length; i++) {

                    painsAr.push(<li>
                        <p>{curPains[i]}</p>
                    </li>)
                }
                return (painsAr)
            }
            else {
                painsAr.push(<li>No Pains are Saved</li>)
                return (painsAr)
            }
        }
        function showDG(curDG) {
            let dgAr = []
            if (curDG[0] != undefined) {

                for (var i = 0; i < curDG.length; i++) {

                    dgAr.push(<li>
                        <p>{curDG[i]}</p>
                    </li>)
                }
                return (dgAr)
            }
            else {
                dgAr.push(<li>No Demograpgics are Saved</li>)
                return (dgAr)
            }
        }
        function showGains(curGains) {
            let gainsAr = []
            if (curGains[0] !== undefined) {

                for (var i = 0; i < curGains.length; i++) {

                    gainsAr.push(<li>
                        <p>{curGains[i]}</p>
                    </li>)
                }
                return (gainsAr)
            }
            else {
                gainsAr.push(<li>No Gains are Saved</li>)
                return (gainsAr)
            }
        }
        function showInfluencesHabits(curInfluences) {
            let habitsAr = []
            let mediaAr = []
            let socialAr = []
            if (curInfluences.habits[0] !== undefined) {

                for (var i = 0; i < curInfluences.habits.length; i++) {

                    habitsAr.push(<li>
                        <p>{curInfluences.habits[i]}</p>
                    </li>)
                }
            }
            else {
                habitsAr.push(<li>No Habits are Saved</li>)
            }
            if (curInfluences.media[0] !== undefined) {

                for (var i = 0; i < curInfluences.media.length; i++) {

                    mediaAr.push(<li>
                        <p>{curInfluences.media[i]}</p>
                    </li>)
                }
            }
            else {
                mediaAr.push(<li>No Media are Saved</li>)
            }
            if (curInfluences.social[0] !== undefined) {

                for (var i = 0; i < curInfluences.social.length; i++) {

                    socialAr.push(<li>
                        <p>{curInfluences.social[i]}</p>
                    </li>)
                }
            }
            else {
                socialAr.push(<li>No Social are Saved</li>)
            }

            let influenceDiv = 
                <>
                <Col md={4}>
                <h5 className = "HBS">Habits</h5>
                    <ol>
                        {habitsAr}
                    </ol>
                </Col>
                <Col md={4}>
                <h5 className = "HBS">Media</h5>
                    <ol>
                        {mediaAr}
                    </ol>
                </Col>
                <Col md={4}>
                <h5 className = "HBS">Social</h5>
                    <ol>
                        {socialAr}
                    </ol>
                </Col>
            </>
            return (influenceDiv)

        }
        let audCount = Object.keys(props.audience)
        let audAr = []
        const rankAr = ["Primary", "Secondary", "Tertiary", "Qurtinary", "5th", "6th", "7th"]
        for (var i = 0; i < audCount.length; i++) {
            let currentObj;
            if (audCount[i] == "Primary") {
                currentObj = props.audience.Primary
            }
            else if (audCount[i] == "Secondary") {
                currentObj = props.audience.Secondary
            }
            else if (audCount[i] == "Tertiary") {
                currentObj = props.audience.Tertiary
            }
            else if (audCount[i] == "Qurtinary") {
                currentObj = props.audience.Qurtinary
            }
            audAr.push(
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {rankAr[i] + " Audience"}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <h4> {currentObj.audName}</h4>
                                <Row >
                                    <Col className="pains">
                                        <div className="topRow">
                                            <h5>Pains</h5>
                                            <ol>
                                                {showPains(currentObj.pains ? currentObj.pains : [])}
                                            </ol>
                                        </div>
                                        <div div className="bottomRow">
                                            <h5>Demographics</h5>
                                            <ol>
                                                {showDG(currentObj.demographics ? currentObj.demographics : [])}
                                            </ol>
                                        </div>
                                    </Col>
                                    <Col className="gains">
                                        <div className="topRow">
                                            <h5>Gains</h5>
                                            <ol>
                                                {showGains(currentObj.gains ? currentObj.gains : [])}
                                            </ol>
                                        </div>
                                        <div div className="bottomRow">
                                            <h5>Psychographics</h5>
                                            <ol>
                                                {showPsychograhics(currentObj.psychographics)}
                                            </ol>
                                        </div>
                                    </Col>


                                </Row>
                                <div>
                                    <Row>
                                        <h5 id = "influh5">Influences</h5>
                                    </Row>
                                    {console.log(currentObj)}
                                    <Row>
                                        {showInfluencesHabits(currentObj.influences)}
                                    </Row>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        }
        return (audAr)
    }
    return (
        <div>
            {/* {console.log(Object.keys(props.audience))} */}
            {returnDivs()}
        </div>

    )
}

export default AudDivs;