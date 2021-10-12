import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SubStrat from "./infoModals/subStrat"
import Print from "./infoModals/print"


function MarkDiv(props) {
    const [subStratShow, setSubStratShow] = React.useState(false);
    const [awarenessShow, setAwarenessShow] = React.useState(false);
    const [interestShow, setInterestShow] = React.useState(false);
    const [desireShow, setDesireShow] = React.useState(false);
    const [actionShow, setActionShow] = React.useState(false);
    const [digitalShow, setDigitalShow] = React.useState(false);
    const [inPersonShow, setInPersonShow] = React.useState(false);
    const [printShow, setPrintShow] = React.useState(false);
    const [otherShow, setOtherShow] = React.useState(false);


    return (
        <>
            <Row>

            </Row>
            <h5>Strategy</h5>
            <Row>
                <a className = "editableItems" onClick={setSubStratShow}>Sub-Stratigies</a>
                <SubStrat
                    show={subStratShow}
                    brandid = {props.brandid}
                    onHide={() => setSubStratShow(false)}
                    subStrat={props.markInfo.subStrats?props.markInfo.subStrats:[]}
                    userid={props.userid}
                />
            </Row>
            <Row>
                <a className = "editableItems" ßonClick={setPrintShow}>Tactics</a>
                <Print
                    show={printShow}
                    onHide={() => setPrintShow(false)}
                    brandid = {props.brandid}
                    print={props.markInfo.prints?props.markInfo.prints:[]}
                    userid={props.userid}
                />
            </Row>
        </>
    )
}

export default MarkDiv;