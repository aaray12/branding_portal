import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateMedia(props) {
    const [formObject, setFormObject] = React.useState({})
    const [mediaObject, setMediaObject] = React.useState({media: props.audMedia})
    const [mediaName, setMediaName] = React.useState()

    function handleMediaName(event){
        const { name, value } = event.target;
        setMediaName({...mediaName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function mediaList() {
        let media = []
        if (mediaObject.media.length == 0) {
            media.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < mediaObject.media.length; i++){
               var mediaName = "Media" + i
                media.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={mediaObject.media[i]} name={mediaName} onChange={handleMediaName}/>
                    </Form.Group>
                    <Button onClick = {deleteMedia} name ={mediaObject.media[i]} >X</Button>
                </li>)
            }
        }
        return(media)
    }
    function addMedia(){
        mediaObject.media.push("New Media")
        // console.log(ArchObject.messages)
    }
    function deleteMedia(event){
        const { name} = event.target;
        var index = mediaObject.media.indexOf(name)

        if(index > -1){
            mediaObject.media.splice(index, 1);
        }
    }
    function mediaSave(event){
        event.preventDefault()
        let newMediaAr = {};
        for(var i = 0; i < mediaObject.media.length; i ++){
            if(document.getElementsByName("Media"+(i))[0].value){
                newMediaAr["Media"+(i+1)] = document.getElementsByName("Media"+(i))[0].value;
            }
            else{
                newMediaAr["Media"+(i+1)] = mediaObject.media[i];
            }
        }
        formObject.updatedMedia =  Object.values(newMediaAr);
        API.updateMedia({
            media: formObject.updatedMedia,
            BI: props.BI,
            rank: props.rank,
            userid: props.userid
        })
        props.onHide()
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.rank} Audience Media Infleunces
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {mediaList()}
                </ol>
            </Form>
            <Button onClick={addMedia}> Add Media</Button>
            <Button onClick={mediaSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateMedia;