import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CompNameModal from "./compInfo"
import SWOTInfo from "./infoModals/SWOTInfoModal"
import CompSite from "./infoModals/compSiteModal"
import CompMessages from "./infoModals/compMessages"
import CompArchs from "./infoModals/compArch"
import CompLogos from "./infoModals/compLogo"
import CompBA from "./infoModals/compBrandAssets"


function CompDiv(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [compSiteShow, setCompSiteShow] = React.useState(false);
    const [compMsgShow, setCompMsgShow] = React.useState(false);
    const [compArchShow, setCompArchShow] = React.useState(false);
    const [compLogoShow, setCompLogoShow] = React.useState(false);
    const [compBAShow, setCompBAShow] = React.useState(false);
    // console.log(props.rank)
    // console.log(props.brandInfo)
    return (
        <>

            <CompNameModal
                brandInfo={props.compInfo}
                brandid = {props.brandid}
                userid={props.userid}
                rank={props.rank}
            />

            <Row>
                <a className = "editableItems" onClick={setModalShow}>S/W/O/T</a>
                <SWOTInfo
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    compInfo={props.compInfo}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>
            <Row>
                <a className = "editableItems" onClick={setCompSiteShow}>Website</a>
                <CompSite
                    show={compSiteShow}
                    onHide={() => setCompSiteShow(false)}
                    compSite={props.compInfo.compSite}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>
            <Row>
                <a className = "editableItems" onClick={setCompBAShow}>Brand Assets</a>
                <CompBA
                    show={compBAShow}
                    onHide={() => setCompBAShow(false)}
                    compBA={props.compInfo.brandassets}
                    brandid = {props.brandid}
                    brandInfo ={props.brandInfo}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>
            <Row>
                <a className = "editableItems" onClick={setCompLogoShow}>Logo</a>
                <CompLogos
                    show={compLogoShow}
                    onHide={() => setCompLogoShow(false)}
                    compLogos={props.compInfo.logo}
                    brandid = {props.brandid}
                    brandInfo ={props.brandInfo}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>
            <Row>
                <a className = "editableItems" onClick={setCompMsgShow}>Messages</a>
                <CompMessages
                    show={compMsgShow}
                    onHide={() => setCompMsgShow(false)}
                    compMessages={props.compInfo.compMessages}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>
            <Row>
                <a className = "editableItems" onClick={setCompArchShow}>Archetype</a>
                <CompArchs
                    show={compArchShow}
                    onHide={() => setCompArchShow(false)}
                    compArchs={props.compInfo.compArch}
                    brandid = {props.brandid}
                    userid={props.userid}
                    rank={props.rank}
                />
            </Row>


            <div id = "audBorder"></div>

        </>
    )
}

export default CompDiv;