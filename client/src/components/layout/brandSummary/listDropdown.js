import React from "react";
import { Card, Accordion, Col, Row } from 'react-bootstrap';


function ListDD(props) {
  function displayList() {
    // console.log(props)
    let listAr = [];
    for (var i = 0; i < props.listThis.length; i++) {
      listAr.push(<li>
        {props.listThis[i]}
      </li>)
    }
    // console.log(listAr)
    return listAr

  }
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <span id = {props.title.toLowerCase() + "H"}>{props.title}:</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Row>
            <Col sm ={4}>
            
            </Col>
            <Col sm ={4} id= "ddList">
              <ol>
                {displayList()}
              </ol>
            </Col>
            <Col sm ={4}>

            </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ListDD;