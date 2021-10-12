import React, { useEffect } from 'react';
import PrivateNav from "../components/layout/PrivateNav"
import { Row, Form, Button } from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import axios from "axios";
import GraphModal from "../components/layout/competition/graphModal"

function CompetitionPage(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [savedState, setSavedState] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});
  const [brandState, setBrandState] = React.useState([]);
  const [userState, setUserState] = React.useState([]);
  const user = props.userID;

  function getBrand() {
    axios.get("/api/brands/" + user.id)
      .then(response => {
        // if(brandState[0] !== undefined){
        //   count++
        // }
        for (var d = 0; d < brandState.length; d++){
          response.data.push(brandState[d])
      }
        setSavedState(response.data)
        // console.log(response.data)

      }).catch(err => {
        console.log(err)
        setSavedState(["N/A"])
      });
  }
  function getUsers() {
    axios.get("/api/users")
      .then(response => {
        setUserState(response.data)
        // console.log(response.data)
        var myName = props.userID.name
        for (var v = 0; v < response.data.length; v++) {
            if (myName == response.data[v].name) {
                
                for (var z = 0; z < response.data[v].brandRW.length; z++) {
                    
                    for (var q = 0; q < response.data.length; q++) {
                        for (var j = 0; j < response.data[q].brand.length; j++) {
                            // console.log(response.data[v].brandRW[z].brand == response.data[q].brand[j].brandName)
                            if (response.data[v].brandRW[z].brand == response.data[q].brand[j].brandName) {
                                // console.log(response.data[q].brand[j])
                                brandState.push(response.data[q].brand[j])
                            }
                        }
                    }
                }

            }
            // console.log(savedState)
        }

      }).catch(err => {
        console.log(err)
        setUserState(["N/A"])
      });
  }
  let BI;
  function brandSelect() {
    var options = [];
    for (var i = 0; i < savedState.length; i++) {
        if (savedState[i])
            options.push(<option>{savedState[i].brandName}</option>)
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
function handleInputChange(event) {
  // event.preventDefault()
  const { name, value } = event.target;
  setFormObject({ ...formObject, [name]: value })

}

  // savedState[BI]?console.log(state):console.log("nah")


  console.log(savedState)
  function setDataSets() {
    let myColor = "Red";
    
  if(savedState[BI].colors[0]!== undefined){
      myColor =savedState[BI].colors[0].hexCode
    }
    else{
      myColor = "Red"
    }
    const colors = [myColor, "black","lightgrey", "#8999BF", "#475473", "charcoal",]
    const dots = ["black", "red", "lightgreen", "blue"]
    var dataArray = []
    for (var i = 0; i < Object.values(savedState[BI].graph[0].scores).length; i++) {
      dataArray.push({
        label: Object.keys(savedState[BI].graph[0].scores)[i].replace("scores", ""),
        fill: false,
        // lineTension: 0.5,
        backgroundColor: dots[i],
        borderColor: colors[i],
        borderWidth: 2,
        data: Object.values(savedState[BI].graph[0].scores)[i],
        lineTension: 0
      })
    }
    return (dataArray)
  }
  let state;

  // savedState[BI] !== undefined ?
  //   savedState[BI].graph[0] === undefined ? 
  //     state = "N/A" : 
  //     state = {
  //     labels: savedState[BI].graph[0].labels,
  //     datasets: setDataSets()
  //   }:
  //    console.log("nah")
    if (formObject.brandChoice) {
      // console.log(props.brandInfo.findIndex(x => x.brandName === formObject.brandChoice))
      BI = savedState.findIndex(x => x.brandName === formObject.brandChoice)
      savedState[BI] !== undefined ?
    savedState[BI].graph[0] === undefined ? 
      state = "N/A" : 
      state = {
      labels: savedState[BI].graph[0].labels,
      datasets: setDataSets()
    }:
     console.log("nah")
  }
  
  React.useEffect(() => { getBrand() });
  React.useEffect(() => { getUsers() }, []);
  console.log(savedState[BI])
  return (
     BI !== undefined ?
      <div key="uniqueKey" style ={{textAlign: "center"}}>
        <PrivateNav key="uniqueKey" />
        <Button key={"test1"} style ={{marginTop: "1em"}}onClick={() => setModalShow(true)}>Generate Graph</Button>
       { savedState[BI] ? <GraphModal
          key={54}
          BI={BI}
          show={modalShow}
          onHide={() => setModalShow(false)}
          brandInfo={savedState}
          userid={savedState[BI].originID}
        /> : null}

        {savedState[BI] ? savedState[BI].graph[0] === undefined ? <p>no graph saved</p> :
          <Line
          
            data={state}
            options={
              {
                bezierCurve: false,
                title: {
                  display: true,
                  text: 'Rankings',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                },
                scales: {

                  yAxes: [{
                    Min: 0,
                    Max: 5,
                    ticks: {
                      stepSize: 1
                    }
                  }]
                }

              }
            }
          /> : null}
      </div> :
      <>
       <PrivateNav key="uniqueKey" />
        <Row>
          {brandSelect()}
        </Row>
  </>
    
    )
}

export default CompetitionPage;