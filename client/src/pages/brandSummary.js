import React, { useEffect } from 'react';
import { Row, Col, Button, Form, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandSummaryNav from "../components/layout/brandSummary/brandSummaryNav"
import BrandSummaryAdminNav from "../components/layout/brandSummary/brandSummaryAdminNav"
import axios from "axios";
import hexRgb from 'hex-rgb'
import { Line } from 'react-chartjs-2';
import { Image } from 'cloudinary-react';

import ListDD from "../components/layout/brandSummary/listDropdown"
import RegDD from "../components/layout/brandSummary/regDropDown"
import ImgCarousel from "../components/layout/brandSummary/imgCarousel"
// import AudDivs from "../components/layout/brandSummary/audienceDivs"
import "./BrandSummaryCSS.css"
import AudDivs from '../components/layout/brandSummary/audienceDivs';
import CompDivs from "../components/layout/brandSummary/compDivs"
import ImageModal from "../components/layout/brand/external/visual/imagesModal"


function BrandSummary(props) {

    const [savedState, setSavedState] = React.useState([]);
    const [brandState, setBrandState] = React.useState([]);
    const [formObject, setFormObject] = React.useState({})
    const [imagesShow, setImagesShow] = React.useState(false);
    const [userState, setUserState] = React.useState([]);
    let BI;

    function getBrand() {
        axios.get("/api/brands/" + props.userID.id)
            .then(response => {
                // console.log(response.data)


                // console.log(brandState.length)
                for (var d = 0; d < brandState.length; d++) {
                    response.data.push(brandState[d])
                }
                //    console.log(response.data)
                setSavedState(response.data)
                if (BI !== undefined) {
                    const timer = setTimeout(() => {
                        console.log("hit tiled")
                        var tilesName = response.data[BI].tiles !== undefined ? Object.keys(response.data[BI].tiles) : []
                        console.log(response.data[BI])
                        for (var i = 0; i < tilesName.length; i++) {
                            let elem = document.querySelector('#' + tilesName[i].toLowerCase().replace(" ", ""))
                            let index = Object.getOwnPropertyDescriptor(response.data[BI].tiles, tilesName[i]).value;
                            console.log(tilesName[i])
                            console.log(index)
                            for (var x = 0; x < response.data[BI].fonts.length; x++) {
                                if (index.font == response.data[BI].fonts[x].name) {
                                    // console.log(response.data[BI].fonts[x].css)
                                    elem.style.fontFamily = response.data[BI].fonts[x].css ? response.data[BI].fonts[x].css : "Roboto"
                                }
                            }
                            if (response.data[BI].colors.length > 0) {
                                for (var e = 0; e < response.data[BI].colors.length; e++) {
                                    if (index.fontColor == response.data[BI].colors[e].colorName) {
                                        elem.style.color = response.data[BI].colors[e].hexCode
                                        console.log("hit")
                                    }
                                    else {
                                        elem.style.color = index.fontColor
                                    }
                                }
                            }
                            else {
                                elem.style.color = index.fontColor
                            }
                            if (response.data[BI].colors.length > 0) {
                                for (var y = 0; y < response.data[BI].colors.length; y++) {
                                    if (index.backgroundColor == response.data[BI].colors[y].colorName) {
                                        elem.style.backgroundColor = response.data[BI].colors[y].hexCode
                                        console.log("hit")
                                    }
                                    else {
                                        // console.log(index.backgroundColor)
                                        elem.style.backgroundColor = index.backgroundColor
                                    }
                                }
                            }
                            else {
                                // console.log(index.backgroundColor)
                                elem.style.backgroundColor = index.backgroundColor
                            }
                            if (index.hideHeader == "Yes") {
                                elem = document.getElementById(tilesName[i].toLowerCase() + "H")
                                elem.style.display = "none"
                            }


                            console.log(index)
                        }
                    }, 500)
                    return () => {
                        clearTimeout(timer)
                    }
                }
            }
            ).catch(err => {
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
                        for (var t = 0; t < response.data[v].brandRead.length; t++) {
                            brandState.push(response.data[v].brandRead[t])
                        }

                        for (var z = 0; z < response.data[v].brandRW.length; z++) {

                            for (var q = 0; q < response.data.length; q++) {
                                for (var j = 0; j < response.data[q].brand.length; j++) {
                                    console.log(response.data[v].brandRW[z].brand == response.data[q].brand[j].brandName)
                                    if (response.data[v].brandRW[z].brand == response.data[q].brand[j].brandName) {
                                        console.log(response.data[q].brand[j])
                                        brandState.push(response.data[q].brand[j])
                                    }
                                }
                            }
                        }

                    }
                }
            }).catch(err => {
                console.log(err)
                setUserState(["N/A"])
            });
    }
    function displayColors() {
        let colorsAr = []
        console.log(savedState[BI].colors)
        if (savedState[BI].colors !== undefined) {
            for (var i = 0; i < savedState[BI].colors.length; i++) {
                let rgb = hexRgb(savedState[BI].colors[i].hexCode)
                colorsAr.push(< div className="colors">
                    <h5>{savedState[BI].colors[i].colorName}</h5>
                    <span className="cDot" style={{ background: savedState[BI].colors[i].hexCode }}></span>
                    <p>{savedState[BI].colors[i].hexCode}</p>
                    <p>R: {rgb.red}</p>
                    <p>G: {rgb.green}</p>
                    <p>B: {rgb.blue}</p>
                </div>)
            }
        }

        return colorsAr
    }
    function showFonts() {
        let fontsAr = []
        if (savedState[BI].fonts[0] != undefined) {

            for (var i = 0; i < savedState[BI].fonts.length; i++) {
                const rankAr = ["Primary", "Secondary", "Tertiary", "Qurtinary", "5th", "6th", "7th"]
                document.head.innerHTML += savedState[BI].fonts[i].link
                // console.log(savedState[0].fonts[i].css)
                fontsAr.push(
                    <div div className="colors">
                        <h5>{rankAr[i]}:</h5>
                        <p style={{ fontFamily: savedState[BI].fonts[i].css }}>{savedState[BI].fonts[i].name}</p>
                        <p style={{ fontFamily: savedState[BI].fonts[i].css }}>Aa Bb Cc Dd Ee Ff</p>
                    </div>
                )
            }
            return (fontsAr)
        }
        else {
            fontsAr.push(<li>No Fonts are Saved</li>)
            return (fontsAr)
        }
    }
    function displayMessages() {
        let msgAr = [];
        for (var i = 0; i < savedState[BI].messaging.length; i++) {
            msgAr.push(
                <div>
                    <h5>Message {i + 1}:</h5>
                    <p>{savedState[BI].messaging[i]}</p>
                </div>
            )
        }
        return (msgAr)
    }
    function displayCompLogos() {
        let compAr = []
        // console.log(Object.values(savedState[BI].competition))
        if (savedState[BI].competition !== undefined) { compAr = Object.values(savedState[BI].competition) }

        // [{logo: [{url:["data:image/jpeg;base64,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"]
        //         }]
        // }]
        console.log(compAr)
        let logoAr = []
        for (var i = 0; i < compAr.length; i++) {
            let logoURL;
            if (compAr[i].logo.length > 0) {
                logoURL = compAr[i].logo[0].url
            }
            else {
                logoURL = "data:image/jpeg;base64,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"
            }
            logoAr.push(
                <img
                    src={logoURL}
                    width="100"
                    style={{ margin: "1em" }}
                // height="100"
                // radius="360"
                />
            )
        }
        console.log(logoAr)
        return (logoAr)
    }
    function setDataSets() {
        const colors = [savedState[BI].colors[0] !== undefined ? savedState[BI].colors[0].hexCode : "Red", "grey", "black"]
        var dataArray = []
        for (var i = 0; i < Object.values(savedState[BI].graph[0].scores).length; i++) {
            dataArray.push({
                label: Object.keys(savedState[BI].graph[0].scores)[i].replace("scores", ""),
                fill: false,
                // lineTension: 0.5,
                backgroundColor: "black",
                borderColor: colors[i],
                borderWidth: 2,
                data: Object.values(savedState[BI].graph[0].scores)[i],
                lineTension: 0
            })
        }
        return (dataArray)
    }
    if (savedState.length == 1) {
        BI = 0
    }
    if (formObject.brandChoice) {
        BI = savedState.findIndex(x => x.brandName === formObject.brandChoice)
    }
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
    React.useEffect(() => { getUsers() }, [])
    React.useEffect(() => { getBrand() }, BI)

    if (BI !== undefined) {

    }
    let state;
    let nah;
    savedState[BI] ?
        savedState[BI].graph[0] === undefined ? state = "N/A" : state = {
            labels: savedState[BI].graph[0].labels,
            datasets: setDataSets()
        } : nah = "nah"

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })

    }
    function loadSummary() {
        if (document.getElementById('Header') !== null) {
            document.getElementById('Header').style.visibility = 'visible'
            document.getElementById('Header').style.backgroundColor = "rgb(240, 240, 240)"
            document.getElementById('loading').style.display = 'none'
        }
    }
    function lone() {
        if (document.getElementById('loading') != undefined) {
            document.getElementById('hLoading').style.visibility = 'visible'
        }
    }
    function ltwo() {
        if (document.getElementById('loading') != undefined) {
            document.getElementById('lone').style.visibility = 'visible'
        }
    }
    function lthree() {
        if (document.getElementById('loading') != undefined) {
            document.getElementById('ltwo').style.visibility = 'visible'
        }
    }
    function lfour() {
        if (document.getElementById('loading') != undefined) {
            document.getElementById('lthree').style.visibility = 'visible'
        }
    }
    setTimeout(loadSummary, 7000);
    setTimeout(lone, 2500);
    setTimeout(ltwo, 4000);
    setTimeout(lthree, 5000);
    setTimeout(lfour, 6000);
    let userType;

    console.log(props)
    console.log(userState)
    for (var i = 0; i < userState.length; i++) {
        if (userState[i]._id == props.userID.id) {
            userType = userState[i].userType
        }
    }
    console.log(userType)
    function setNav() {
        let nav;
        console.log("admin set")
        if (userType == "Admin") {
            console.log("admin set")
            nav = <BrandSummaryAdminNav
                brandInfo={savedState[BI] !== undefined ? savedState[BI] : "No Brands Saved"}
                BI={BI}
            />

        }
        else {
            console.log("client set")
            nav = <BrandSummaryNav
                brandInfo={savedState[BI] !== undefined ? savedState[BI] : "No Brands Saved"}
                BI={BI}
            />
        }
        return nav;
    }
    return (
        <>
            {BI !== undefined ?
                <>
                    <div id="bsContainer">
                        <div id="loading" style={{ display: "inlineblock", backgroundColor: "white"}}>
                            <h1 class="loading" style={{ visibility: 'hidden'}} id="hLoading">Loading</h1><h1 id="lone" class="loading" style={{ visibility: 'hidden' }}>.</h1><h1 id="ltwo" class="loading" style={{ visibility: 'hidden' }}>.</h1><h1 id="lthree" class="loading" style={{ visibility: 'hidden' }}>.</h1>
                        </div>
                        <div id="Header" style={{ visibility: 'hidden' }}>
                            {console.log(savedState[BI].fonts.length)}
                            {setNav()}
                            {savedState[BI].fonts.length > 0 ?
                                <h1 style={{ fontFamily: savedState[BI].fonts[0].css }} id="bName"> {savedState[BI].brandName}</h1> :
                                <h1 id="bName"> {savedState[BI].brandName}</h1>}
                            <div id="manifesto" className="allCDiv">
                                <h4 id="manifestoH">Manifesto:</h4>
                                <p>{savedState[BI].manifesto}</p>
                            </div>
                            <div className="ddDiv" id="mission">
                                <RegDD
                                    title="Mission"
                                    content={savedState[BI].mission}
                                />
                            </div>
                            <div id="vision" className="ddDiv">
                                <RegDD
                                    title="Vision"
                                    content={savedState[BI].vision}
                                />
                            </div>
                            <div className="ddDiv" id="values">
                                <ListDD
                                    title="Values"
                                    listThis={savedState[BI].values ? savedState[BI].values : ["Values Not Available"]}
                                />
                            </div>
                            <div id="colors" className="allCDiv">
                                <h4 id="colorsH">Colors:</h4>
                                {displayColors()}
                            </div>
                            <div id="typeface" className="allCDiv">
                                <h4 id="typefaceH">Type Face:</h4>
                                {showFonts()}
                            </div>
                            <div id="messaging" className="allCDiv">
                                <h4 id="messagingH">Messaging:</h4>
                                {displayMessages()}
                            </div>
                            <div id="voice" className="allCDiv">
                                <h4 id="voiceH">Voice:</h4>
                                {savedState[BI].voice}
                            </div>
                            <div id="styleguide" className="allCDiv">
                                <h5 id="styleguideH" >Style Guide:</h5>
                                <a href={savedState[BI].styleGuide} target="_blank">Go To Style Guide</a>
                                <p>( {savedState[BI].styleGuide} )</p>
                            </div>
                            <div id="assets" className="allCDiv">
                                <h5 onClick={() => setImagesShow(true)} id="assetsH">Image Library:</h5>
                                <ImageModal
                                    show={imagesShow}
                                    onHide={() => setImagesShow(false)}
                                    brandid={BI}
                                    brandInfo={savedState[BI]}
                                    userid={props.userID.id}
                                />
                                <ImgCarousel
                                    images={savedState[BI].images ? savedState[BI].images : []}
                                />
                            </div>
                            <div >
                                <h2 id="audHeader">Audience</h2>
                            </div>
                            <div className="audDivs">
                                <AudDivs
                                    audience={savedState[BI].audience ? savedState[BI].audience : []}
                                />
                            </div>
                            <div >
                                <h2 id="comph2">Competition</h2>
                                <div id="compLogos">
                                    {displayCompLogos()}
                                </div>
                                <div id="graph">
                                    {savedState[BI] ? savedState[BI].graph[0] === undefined ? <p>no graph saved</p> : <Line
                                        data={state}
                                        options={{
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

                                        }}
                                    /> : null}
                                </div>

                                <CompDivs
                                    comp={savedState[BI].competition ? savedState[BI].competition : []}
                                />
                            </div>
                            {console.log("Marketing:" + savedState[BI].marketing)}
                        </div>
                    </div>
                </>
                :
                <>
                    {setNav()}
                    <Row>
                        {brandSelect()}

                    </Row>
                </>}
        </>
    )
}
export default BrandSummary;