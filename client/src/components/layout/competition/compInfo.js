import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CompNameUpdateModal from "./updateModals/compNameUpdate"

function CompNameModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    // console.log(props.rank)
    // console.log(props.brandInfo)
    return (
        <Row>
            <h4 className = "editableItems"  className = "compHeader" onClick={() => setModalShow(true)}>{props.rank}: {props.brandInfo.compName}</h4>
            <CompNameUpdateModal
            show = {modalShow}
            onHide={() => setModalShow(false)}
            rank = {props.rank}
            brandid = {props.brandid}
            compName = {props.brandInfo.compName}
            userid={props.userid}
            />
        </Row>
    )
}

export default CompNameModal;