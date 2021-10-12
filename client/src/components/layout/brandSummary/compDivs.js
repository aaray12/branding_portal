import React from "react";
import { Card, Accordion, Row, Col } from 'react-bootstrap';
import "./brandSummaryComp.css"


function CompDivs(props) {

    function returnDivs() {
        function showWeakness(weaknessObj) {
            let weaknessAr = []
            if (weaknessObj[0] != undefined) {

                for (var i = 0; i < weaknessObj.length; i++) {

                    weaknessAr.push(<li>
                        <p>{weaknessObj[i]}</p>
                    </li>)
                }
                return (weaknessAr)
            }
            else {
                weaknessAr.push(<li>No Weaknesses are Saved</li>)
                return (weaknessAr)
            }
        }
        function showStrengths(curStrengths) {
            let sAr = []
            if (curStrengths[0] != undefined) {

                for (var i = 0; i < curStrengths.length; i++) {

                    sAr.push(<li>
                        <p>{curStrengths[i]}</p>
                    </li>)
                }
                return (sAr)
            }
            else {
                sAr.push(<li>No Competitors are Saved</li>)
                return (sAr)
            }
        }
        function showOppertunities(curOps) {
            let opsAr = []
            if (curOps[0] != undefined) {

                for (var i = 0; i < curOps.length; i++) {

                    opsAr.push(<li>
                        <p>{curOps[i]}</p>
                    </li>)
                }
                return (opsAr)
            }
            else {
                opsAr.push(<li>No Weaknesses are Saved</li>)
                return (opsAr)
            }
        }
        function showThreads(curThreads) {
            let threadsAr = []
            if (curThreads[0] != undefined) {

                for (var i = 0; i < curThreads.length; i++) {

                    threadsAr.push(<li>
                        <p>{curThreads[i]}</p>
                    </li>)
                }
                return (threadsAr)
            }
            else {
                threadsAr.push(<li>No Threads are Saved</li>)
                return (threadsAr)
            }
        }
        function showMsg(curMsg) {
            let msgAr = []
            if (curMsg[0] != undefined) {

                for (var i = 0; i < curMsg.length; i++) {

                    msgAr.push(<li>
                        <p>{curMsg[i]}</p>
                    </li>)
                }
                return (msgAr)
            }
            else {
                msgAr.push(<li>No Messages are Saved</li>)
                return (msgAr)
            }
        }
        function showArchs(curArchs) {
            let archAr = []
            if (curArchs[0] != undefined) {

                for (var i = 0; i < curArchs.length; i++) {

                    archAr.push(<li>
                        <p>{curArchs[i]}</p>
                    </li>)
                }
                return (archAr)
            }
            else {
                archAr.push(<li>No Archetypes are Saved</li>)
                return (archAr)
            }
        }
        let compCount = Object.keys(props.comp)
        let compAr = []
        const rankAr = ["Primary", "Secondary", "Tertiary", "Qurtinary", "5th", "6th", "7th"]
        for (var i = 0; i < compCount.length; i++) {
            let currentObj;
            if (compCount[i] == "Primary") {
                currentObj = props.comp.Primary
            }
            else if (compCount[i] == "Secondary") {
                currentObj = props.comp.Secondary
            }
            else if (compCount[i] == "Tertiary") {
                currentObj = props.comp.Tertiary
            }
            else if (compCount[i] == "Qurtinary") {
                currentObj = props.comp.Qurtinary
            }
            compAr.push(
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {rankAr[i] + " Competitor: " + currentObj.compName}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Row className = "swotRow">
                                <Col>
                                <h4 className="swotHeading">S</h4>
                                    <ol>
                                    {showStrengths(currentObj.swot.strengths)}
                                </ol>
                                </Col>
                                <Col>
                                <h4 className="swotHeading">W</h4>
                                    <ol>
                                    {showWeakness(currentObj.swot.weaknesses)}
                                </ol>
                                </Col>
                                <Col>
                                <h4 className="swotHeading">O</h4>
                                    <ol>
                                    {showOppertunities(currentObj.swot.oppertunities)}
                                </ol>
                                </Col>
                                <Col>
                                <h4 className="swotHeading">T</h4>
                                    <ol>
                                    {showThreads(currentObj.swot.threads)}
                                </ol>

                                </Col>
                                <div id = "swotBorder">

                                </div>
                            </Row>
                            <Row>
                                <Col>
                                {/* console.log(currentObj) */}
                                <h4>Website:</h4>
                                {/* <img src="data:image/png;base64,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"></img> */}
                                <a href = {currentObj.compSite} target="_blank">Go To Site</a>
                                </Col>
                                <Col>
                                <h4>Messages:</h4>
                                <ol>
                                {showMsg(currentObj.compMessages)}
                                </ol>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                    <Col>
                                    
                                     <img src="data:image/png;base64,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"></img>
                                    </Col>
                                    <Col>
                                    <h4 >Archetype:</h4>
                                    <ol>
                                    {showArchs(currentObj.compArch)}
                                    </ol>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        }
        return (compAr)
    }
    return (
        <div id = "compDivs">
            {returnDivs()}
        </div>

    )
}

export default CompDivs;