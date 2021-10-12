import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'
import MissionModal from "../layout/brand/brandMission"
import VisionModal from "../layout/brand/brandVision"
import ManiModal from "../layout/brand/brandMani"
import ValueModal from "../layout/brand/brandValues"
import ColorModal from "../layout/brand/external/visual/colorModal"
import ImageModal from "../layout/brand/external/visual/imagesModal"
import LogoModal from "../layout/brand/external/visual/logoModal"
import VoiceModal from "../layout/brand/external/verbal/voiceModal"
import MessagingModal from "../layout/brand/external/verbal/messagingModel"
import TaglineModal from "../layout/brand/external/verbal/tagelineModal"
import CompDiv from "../layout/competition/compDiv"
import AudDiv from "../layout/Audience/audienceDiv"
import AddAudienceModal from "../layout/Audience/update/addAudience"
import MarkDiv from "../layout/marketing/marketingDiv"
import Fonts from "../layout/brand/external/visual/fontsModal"
import StyleGuideModal from "../layout/brand/external/visual/styleGuideModal"
import BrandSelect from "./brandSelect"

import CompModal from "../forms/compModal"
import "./Dashboard.css"

function BrandDashboard(props) {
    const [formObject, setFormObject] = React.useState({})
    const [missionShow, setMissionShow] = React.useState(false);
    const [visionShow, setVisionShow] = React.useState(false);
    const [maniShow, setManiShow] = React.useState(false);
    const [valueShow, setValueShow] = React.useState(false);
    const [colorShow, setColorShow] = React.useState(false);
    const [fontShow, setFontShow] = React.useState(false);
    const [imagesShow, setImagesShow] = React.useState(false);
    const [logoShow, setLogoShow] = React.useState(false);
    const [voiceShow, setVoiceShow] = React.useState(false);
    const [messagingShow, setMessagingShow] = React.useState(false);
    const [taglineShow, setTaglineShow] = React.useState(false);
    const [compShow, setCompShow] = React.useState(false);
    const [audShow, setAudShow] = React.useState(false);
    const [sGuideShow, setSGuideShow] = React.useState(false);
    // console.log(props)
// document.getElementById('bdButton').style.display = "hidden"
    function handleInputChange(event) {
        // event.preventDefault()
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })

    }
    let BI;
    // console.log(props)
    if (formObject.brandChoice) {
        // console.log(props.brandInfo.findIndex(x => x.brandName === formObject.brandChoice))
        BI = props.brandInfo.findIndex(x => x.brandName === formObject.brandChoice)
    }
    function brandSelect() {
        var options = [];
        for (var i = 0; i < props.brandInfo.length; i++) {
            options.push(<option>{props.brandInfo[i].brandName}</option>)
        }
        return (
            <div id="brandSelect">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control as="select" name="brandChoice" onChange={handleInputChange}>
                            <option>None</option>
                            {options}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
    function onEditBrand(e) {
        e.preventDefault()
        console.log(e.target.name)
        formObject.brandChoice = e.target.name
        let cardDiv = document.getElementById("brandCardsDiv")
        console.log(cardDiv)
        cardDiv.style.display = 'none'
    }
    // console.log(BI)
    return (
        <Row>
            {/* {createLinkTag()} */}
            <Row id="bSelect">
                {/* {brandSelect()} */}
                <BrandSelect brands={props.brandInfo} users={props.users} onEdit={onEditBrand} name={props.name} userID={props.userid} />
            </Row>
            {BI !== undefined ?
                <>
                    <Row id="brandEdit">
                        <Col className="brandCols">
                            <h3 className="colHeader">Brand: {props.brandInfo[BI].brandName?props.brandInfo[BI].brandName:"No Brand Name Found"}</h3>
                            <h4>Internal</h4>
                            <Row>
                                <a className = "editableItems" onClick={() => setMissionShow(true)}>Mission</a>
                                <MissionModal
                                    show={missionShow}
                                    onHide={() => setMissionShow(false)}
                                    mission={props.brandInfo[BI].mission}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a  className = "editableItems"onClick={() => setVisionShow(true)}>Vision</a>
                                <VisionModal
                                    show={visionShow}
                                    onHide={() => setVisionShow(false)}
                                    vision={props.brandInfo[BI].vision}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setValueShow(true)}>Values</a>
                                <ValueModal
                                    show={valueShow}
                                    onHide={() => setValueShow(false)}
                                    values={props.brandInfo[BI].values ? props.brandInfo[BI].values : []}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a  className = "editableItems" onClick={() => setManiShow(true)}>Manifesto</a>
                                <ManiModal
                                    show={maniShow}
                                    onHide={() => setManiShow(false)}
                                    mani={props.brandInfo[BI].manifesto}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <h4 id = "externalHead">External</h4>
                            <h5 >Verbal</h5>
                            <Row>
                                <a className = "editableItems" onClick={() => setMessagingShow(true)}>Messages</a>
                                <MessagingModal
                                    show={messagingShow}
                                    onHide={() => setMessagingShow(false)}
                                    brandid={props.brandInfo[BI].originIndex}
                                    messaging={props.brandInfo[BI].messaging ? props.brandInfo[BI].messaging : []}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setVoiceShow(true)}>Voice</a>
                                <VoiceModal
                                    show={voiceShow}
                                    onHide={() => setVoiceShow(false)}
                                    voice={props.brandInfo[BI].voice}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setTaglineShow(true)}>Tagline</a>
                                <TaglineModal
                                    show={taglineShow}
                                    onHide={() => setTaglineShow(false)}
                                    taglines={props.brandInfo[BI].taglines ? props.brandInfo[BI].taglines : []}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <h5 id="visualHead" >Visual</h5>
                            <Row>
                                <a className = "editableItems" onClick={() => setLogoShow(true)}>Logo</a>
                                <LogoModal
                                    show={logoShow}
                                    onHide={() => setLogoShow(false)}
                                    brandInfo={props.brandInfo[BI]}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setColorShow(true)}>Colors</a>
                                <ColorModal
                                    show={colorShow}
                                    onHide={() => setColorShow(false)}
                                    brandid={props.brandInfo[BI].originIndex}
                                    colors={props.brandInfo[BI].colors ? props.brandInfo[BI].colors : []}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setFontShow(true)}>Fonts</a>
                                <Fonts
                                    show={fontShow}
                                    onHide={() => setFontShow(false)}
                                    fonts={props.brandInfo[BI].fonts ? props.brandInfo[BI].fonts : []}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setImagesShow(true)}>Image Library</a>
                                <ImageModal
                                    show={imagesShow}
                                    onHide={() => setImagesShow(false)}
                                    brandid={props.brandInfo[BI].originIndex}
                                    brandInfo={props.brandInfo[BI]}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                            <Row>
                                <a className = "editableItems" onClick={() => setSGuideShow(true)}>Style Guide</a>
                                <StyleGuideModal
                                    show={sGuideShow}
                                    onHide={() => setSGuideShow(false)}
                                    brandid={props.brandInfo[BI].originIndex}
                                    brandInfo={props.brandInfo[BI]}
                                    userid={props.brandInfo[BI].originID}
                                />
                            </Row>
                        </Col>
                        <Col className="brandCols">
                            <h3 className="colHeader" >Audience</h3>

                            {props.brandInfo[BI].audience == undefined ?
                                <Row >
                                    <Button id = "addAudBtn" onClick={() => setAudShow(true)}>Add Audience</Button>
                                    <AddAudienceModal
                                        show={audShow}
                                        brandid={props.brandInfo[BI].originIndex}
                                        onHide={() => setAudShow(false)}
                                        userid={props.brandInfo[BI].originID}
                                    />

                                </Row> :
                                <>
                                    {/* {console.log(props.brandInfo[BI].audience.Primary)} */}
                                    {props.brandInfo[BI].audience.Primary ?

                                        <AudDiv
                                            audInfo={props.brandInfo[BI].audience.Primary}
                                            userid={props.brandInfo[BI].originID}
                                            brandid={props.brandInfo[BI].originIndex}
                                            rank={"Primary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setAudShow(true)}>Add Primary Audience</Button>
                                            <AddAudienceModal
                                                show={audShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setAudShow(false)}
                                                userid={props.brandInfo[BI].originID}
                                            />
                                        </>
                                    }
                                    {props.brandInfo[BI].audience.Secondary ?
                                        <AudDiv
                                            audInfo={props.brandInfo[BI].audience.Secondary}
                                            brandid={props.brandInfo[BI].originIndex}
                                            userid={props.brandInfo[BI].originID}
                                            rank={"Secondary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setAudShow(true)}>Add Secondary Audience</Button>
                                            <AddAudienceModal
                                                show={audShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setAudShow(false)}
                                                userid={props.brandInfo[BI].originID}
                                            />
                                        </>
                                    }
                                    {props.brandInfo[BI].audience.Tertiary ?
                                        <AudDiv
                                            audInfo={props.brandInfo[BI].audience.Tertiary}
                                            userid={props.brandInfo[BI].originID}
                                            brandid={props.brandInfo[BI].originIndex}
                                            rank={"Tertiary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setAudShow(true)}>Add Tertiary Audience</Button>
                                            <AddAudienceModal
                                                show={audShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setAudShow(false)}
                                                userid={props.brandInfo[BI].originID}
                                            />
                                        </>
                                    }
                                </>}

                        </Col>

                        <Col className="brandCols">
                            <h3 className="colHeader">Competition</h3>

                            {props.brandInfo[BI].competition == undefined ?
                                <Row>
                                    <Button className = "bdButton" onClick={() => setCompShow(true)}>Add Competitor</Button>
                                    <CompModal
                                        show={compShow}
                                        brandid={props.brandInfo[BI].originIndex}
                                        onHide={() => setCompShow(false)}
                                        userid={props.brandInfo[BI].originID}
                                    />
                                </Row> : <>
                                    {props.brandInfo[BI].competition.Primary ?
                                        <CompDiv
                                            compInfo={props.brandInfo[BI].competition.Primary}
                                            brandid={props.brandInfo[BI].originIndex}
                                            brandInfo={props.brandInfo[BI]}
                                            userid={props.brandInfo[BI].originID}
                                            rank={"Primary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setCompShow(true)}>Add Primary Competitor</Button>
                                            <CompModal
                                                show={compShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setCompShow(false)}
                                                userid={props.brandInfo[BI].originID} />
                                        </>}
                                    {props.brandInfo[BI].competition.Secondary ?
                                        <CompDiv
                                            compInfo={props.brandInfo[BI].competition.Secondary}
                                            brandInfo={props.brandInfo[BI]}
                                            brandid={props.brandInfo[BI].originIndex}
                                            userid={props.brandInfo[BI].originID}
                                            rank={"Secondary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setCompShow(true)}>Add Secondary Competitor</Button>
                                            <CompModal
                                                show={compShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setCompShow(false)}
                                                userid={props.brandInfo[BI].originID} />
                                        </>}
                                    {props.brandInfo[BI].competition.Tertiary ?
                                        <CompDiv
                                            compInfo={props.brandInfo[BI].competition.Tertiary}
                                            brandInfo={props.brandInfo[BI]}
                                            brandid={props.brandInfo[BI].originIndex}
                                            userid={props.brandInfo[BI].originID}
                                            rank={"Tertiary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setCompShow(true)}>Add Tertiary Competitor</Button>
                                            <CompModal
                                                show={compShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setCompShow(false)}
                                                userid={props.brandInfo[BI].originID} />
                                        </>}
                                    {props.brandInfo[BI].competition.Qurtinary ?
                                        <CompDiv
                                            compInfo={props.brandInfo[BI].competition.Qurtinary}
                                            brandInfo={props.brandInfo[BI]}
                                            brandid={props.brandInfo[BI].originIndex}
                                            userid={props.brandInfo[BI].originID}
                                            rank={"Qurtinary"}
                                        /> :
                                        <>
                                            <Button className = "bdButton" onClick={() => setCompShow(true)}>Add Qurtinary Competitor</Button>
                                            <CompModal
                                                show={compShow}
                                                brandid={props.brandInfo[BI].originIndex}
                                                onHide={() => setCompShow(false)}
                                                userid={props.brandInfo[BI].originID} />
                                        </>}
                                </>

                            }
                        </Col>
                        <Col className="brandCols"  id = "colMarketing">
                            <h3 className="colHeader">Marketing</h3>
                            {/* {console.log(props.brandInfo[0])} */}
                            {props.brandInfo[BI].marketing ?
                                <MarkDiv
                                    markInfo={props.brandInfo[BI].marketing}
                                    brandid={props.brandInfo[BI].originIndex}
                                    userid={props.brandInfo[BI].originID}
                                /> :
                                <p>Marketing Not Available</p>
                            }

                        </Col>
                    </Row>
                    <Row style={{ margin: "auto" }}>
                        {brandSelect()}
                    </Row>
                </> : null}

        </Row>

    )
}

export default BrandDashboard;