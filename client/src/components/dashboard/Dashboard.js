import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API"
import axios from "axios";
import "./Dashboard.css"
import BrandModal from "../forms/Brandmodal"
import BrandDashboard from "./brandDboard"

function Dashboard(props) {
  // console.log(props)
  const [modalShow, setModalShow] = React.useState(false);
  const user = props.userID;
  const [formObject, setFormObject] = React.useState({})
  const [savedState, setSavedState] = React.useState([]);
  const [userState, setUserState] = React.useState([]);
  const [brandState, setBrandState] = React.useState([]);
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
    //console.log(formObject)

  };
  function saveInput() {
    API.saveBrand({
      userId: user.id,
      brandName: formObject.Brand,
    })
    console.log("save brand", formObject.Brand)
  }

  // React.useEffect(() => getSavedList(user.id));
  // const getSavedList = userId => {
  //   API.getBrand(userId).then(response => {
  //     let myResponse = response.data
  //     setSavedState(myResponse)
  //   })
  // }
  function handleClick(event) {
    event.preventDefault();
    // axios.get("/api/brands/" + user.id)
    //   .then(response => {
    //     setSavedState(response.data)
    //     console.log(response.data)

    //   }).catch(err => {
    //     console.log(err)
    //     setSavedState(["N/A"])
    //   });
    // console.log(savedState[0])

  }
  var count =0
  function getBrand() {
    axios.get("/api/brands/" + user.id)
      .then(response => {
        if(brandState[0] !== undefined){
          count++
        }
        for (var d = 0; d < brandState.length; d++){
          response.data.push(brandState[d])
      }
      
        setSavedState(response.data)
        
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
        for (var x = 0; x < brandState.length; x++) {
          console.log("hit")
          for (var i = 0; i < brandState[x].fonts.length; i++) {
            console.log(brandState[x].fonts)
            document.head.innerHTML += brandState[x].fonts[i].link
          }
        }

      }).catch(err => {
        console.log(err)
        setUserState(["N/A"])
      });
  }


  React.useEffect(() => { getBrand() });
  React.useEffect(() => { getUsers() }, []);
  // console.log(savedState)
  React.useEffect(() => {
    console.log(savedState)
    if (savedState.length > 0) {
      // console.log(savedState)
      for (var x = 0; x < savedState.length; x++) {
        console.log("hit")
        for (var i = 0; i < savedState[x].fonts.length; i++) {
          console.log(savedState[x].fonts)
          document.head.innerHTML += savedState[x].fonts[i].link
        }
      }
    }
  }, [])
  // for(var i =0; i < savedState[0].fonts.length; i++){
  //     document.head.innerHTML += savedState[0].fonts[i].link
  // }

  function checkBrand() {
    let brandInfo = []
    if (savedState[0]) {
      for (var c = 0; c < savedState.length; c++) {
        brandInfo.push(savedState[c])
      }
      // for (var u = 0; u < userState.length; u++) {

      //   if (props.userID.name == userState[u].name) {
          

      //     if (userState[u].brandRW.length > 0) {
      //       for (var y = 0; y < userState[u].brandRW.length; y++) {
      //         for (var l = 0; l < userState.length; l++) {
      //           for (var a = 0; a < userState[l].brand.length; a++) {
      //             if (userState[u].brandRW[y].brand == userState[l].brand[a].brandName) {
      //               // console.log(userState[l].brand[a])
      //               brandInfo.push(userState[l].brand[a])
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // brandInfo.push(["brand"])
      // console.log(brandInfo)
      return (<BrandDashboard brandInfo={brandInfo} users={userState} userid={user.id} name={props.userID.name} />)
    }
    else {
      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into the{" "}
                  <span>Convergenx Portal </span>👏
            </p>
              </h4>
            </div>
          </div>
        </div>)
    }

  }

  // console.log(userState)
  return (
    <div id="lgDashboard">
      {checkBrand()}
      <div id ="dButtons">
      <Button variant="primary" onClick={() => setModalShow(true)} class = "dButton" id ="abButton">
        Add Brand
      </Button>
      <Link to="/register" id ="regUser" class = "dButton">Register New User</Link>
      <BrandModal
        show={modalShow}
        brandInfo ={savedState.length}
        onHide={() => setModalShow(false)}
        userid={user.id}
      />
      </div>
    </div>
  );
}


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
