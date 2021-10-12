import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import JTB from "./info/JTB"
import Pains from "./info/pains"
import Gains from "./info/gains"
import Insights from "./info/insight"
import Demographics from "./info/demographics"
import Psychograhics from "./info/psychograhics"
import Archetypes from "./info/archetype"
import Media from "./info/audMedia"
import Habits from "./info/audHabits"
import Social from "./info/audSocial"

function AudDiv(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [jtbShow, setJTBShow] = React.useState(false);
  const [painsShow, setPainsShow] = React.useState(false);
  const [gainsShow, setGainsShow] = React.useState(false);
  const [insightsShow, setInsightsShow] = React.useState(false);
  const [demographicsShow, setDemographicsShow] = React.useState(false);
  const [psychograhicsShow, setPsychograhicsShow] = React.useState(false);
  const [archetypesShow, setArchetypesShow] = React.useState(false);
  const [mediaShow, setMediaShow] = React.useState(false);
  const [habitsShow, setHabitsShow] = React.useState(false);
  const [socialShow, setSocialShow] = React.useState(false);



  return (
    <>
      <h4>{props.rank}: {props.audInfo.audName}</h4>
      <Row>
        <a className = "editableItems" onClick={setJTBShow}>Jobs to be done</a>
        <JTB
          show={jtbShow}
          onHide={() => setJTBShow(false)}
          audJTB={props.audInfo.JTB}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setPainsShow}>Pains</a>
        <Pains
          show={painsShow}
          onHide={() => setPainsShow(false)}
          audPains={props.audInfo.pains}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setGainsShow}>Gains</a>
        <Gains
          show={gainsShow}
          onHide={() => setGainsShow(false)}
          audGains={props.audInfo.gains?props.audInfo.gains:[]}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setInsightsShow}>Insight</a>
        <Insights
          show={insightsShow}
          onHide={() => setInsightsShow(false)}
          audInsights={props.audInfo.insight}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>

      </Row>
      <Row>
        <a className = "editableItems" onClick={setDemographicsShow}>Demographics</a>
        <Demographics
          show={demographicsShow}
          onHide={() => setDemographicsShow(false)}
          audDemographics={props.audInfo.demographics}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setPsychograhicsShow}>Psychograhics</a>
        {/* {console.log(props.audInfo.psychographics)} */}
        <Psychograhics
          show={psychograhicsShow}
          onHide={() => setPsychograhicsShow(false)}
          audPsychograhics={props.audInfo.psychographics}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setArchetypesShow}>Archetype</a>
        <Archetypes
          show={archetypesShow}
          onHide={() => setArchetypesShow(false)}
          audArchs={props.audInfo.archetype}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>

      </Row>
      <Row>
        <h5 id = "influenesh5">Influences</h5>
      </Row>
      <Row>
        <a className = "editableItems" onClick={setMediaShow}>Media</a>
        <Media
          show={mediaShow}
          onHide={() => setMediaShow(false)}
          audMedia={props.audInfo.influences.media}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setHabitsShow}>Habits</a>
        <Habits
          show={habitsShow}
          onHide={() => setHabitsShow(false)}
          audHabits={props.audInfo.influences.habits}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <Row>
        <a className = "editableItems" onClick={setSocialShow}>Social</a>
        <Social
          show={socialShow}
          onHide={() => setSocialShow(false)}
          audSocial={props.audInfo.influences.social}
          BI= {props.brandid}
          userid={props.userid}
          rank={props.rank}
        />
      </Row>
      <div id = "audBorder"></div>
    </>
  )
}

export default AudDiv;