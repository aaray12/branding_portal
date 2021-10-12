//SWOT = Strengths/Weakness/Oppertunities/Threads
import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
// import SWOTUpdateModal from "../updateModals/updateSWOTModal"
import SWOTUpdateModal from "../updateModals/updateSWOT"

function SWOTInfo(props) {
    const [modalShow, setModalShow] = React.useState(false);
   
    // console.log(props.compInfo.swot.strengths[0])
    let compInfo = "props.brandInfo.competition." + props.rank
    // console.log(props)
    function showStrength(){
        let sAr=[]
        if(props.compInfo.swot.strengths[0] != undefined){
           
            for(var i = 0; i<props.compInfo.swot.strengths.length; i++){
               
                    sAr.push(<li>
                        <p>{props.compInfo.swot.strengths[i]}</p>
                    </li>)
            }
            return(sAr)
        }
        else{
            sAr.push(<li>No Strengths Saved</li>)
            return(sAr)
        }
    }
    function showWeaknesses(){
        let wAr=[]
        if(props.compInfo.swot.weaknesses[0] != undefined){
            for(var i = 0; i<props.compInfo.swot.weaknesses.length; i++){
               
                    wAr.push(<li>
                        <p>{props.compInfo.swot.weaknesses[i]}</p>
                    </li>)
            }
            return(wAr)
        }
        else{
            wAr.push(<li>No Weaknesses Saved</li>)
            return(wAr)
        }
    }
    function showOppertunities(){
        let oAr=[]
        if(props.compInfo.swot.oppertunities[0] != undefined){
            for(var i = 0; i<props.compInfo.swot.oppertunities.length; i++){
               
                    oAr.push(<li>
                        <p>{props.compInfo.swot.oppertunities[i]}</p>
                    </li>)
            }
            return(oAr)
        }
        else{
            oAr.push(<li>No Oppertunities Saved</li>)
            return(oAr)
        }
    }
    function showThreads(){
        let tAr=[]
        if(props.compInfo.swot.threads[0] != undefined){
            for(var i = 0; i<props.compInfo.swot.threads.length; i++){
               
                    tAr.push(<li>
                        <p>{props.compInfo.swot.threads[i]}</p>
                    </li>)
            }
            return(tAr)
        }
        else{
            tAr.push(<li>No Threads Saved</li>)
            return(tAr)
        }
    }
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.rank} Competitor S/W/O/T
                        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Strengths</h4>
                <ol>
                    {showStrength()}
                </ol>
                <h4>Weaknesses</h4>
                <ol>
                    {showWeaknesses()}
                </ol>
                <h4>Opperunities</h4>
                <ol>
                    {showOppertunities()}
                </ol>
                <h4>Threads</h4>
                <ol>
                    {showThreads()}
                </ol>
            <Button onClick={() => setModalShow(true)}>Edit</Button>
                <SWOTUpdateModal
                compInfo= {props.compInfo}
                userid={props.userid}
                brandid = {props.brandid}
                rank = {props.rank}
                show = {modalShow}
                onHide={() => setModalShow(false)}/>
            </Modal.Body>
        </Modal>

    )

}
export default SWOTInfo;