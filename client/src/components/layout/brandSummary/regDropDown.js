import React from "react";
import { Card, Accordion} from 'react-bootstrap';


function RegDD(props) {

    return (
<Accordion defaultActiveKey="0" >
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <span id = {props.title.toLowerCase() + "H"}>{props.title}:</span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <p>{props.content}</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}

export default RegDD;