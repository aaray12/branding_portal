import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../utils/API"

function UpdateSocial(props) {
    const [formObject, setFormObject] = React.useState({})
    const [socialObject, setSocialObject] = React.useState({social: props.audSocial})
    const [socialName, setSocialName] = React.useState()

    function handleSocialName(event){
        const { name, value } = event.target;
        setSocialName({...socialName, [name]: value})
        // console.log(Object.values(valueName))
    }

    function socialList() {
        let social = []
        if (socialObject.social.length == 0) {
            social.push(<li>
                <p>Click Add painetype to save new painetype</p>
            </li>)
        }
        else{
            for( var i = 0; i < socialObject.social.length; i++){
               var socialName = "Social" + i
                social.push(<li>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={socialObject.social[i]} name={socialName} onChange={handleSocialName}/>
                    </Form.Group>
                    <Button onClick = {deleteSocial} name ={socialObject.social[i]} >X</Button>
                </li>)
            }
        }
        return(social)
    }
    function addSocial(){
        socialObject.social.push("New Social")
        // console.log(ArchObject.messages)
    }
    function deleteSocial(event){
        const { name} = event.target;
        var index = socialObject.social.indexOf(name)

        if(index > -1){
            socialObject.social.splice(index, 1);
        }
    }
    function socialSave(event){
        event.preventDefault()
        let newSocialAr = {};
        for(var i = 0; i < socialObject.social.length; i ++){
            if(document.getElementsByName("Social"+(i))[0].value){
                newSocialAr["Social"+(i+1)] = document.getElementsByName("Social"+(i))[0].value;
            }
            else{
                newSocialAr["Social"+(i+1)] = socialObject.social[i];
            }
        }
        formObject.updatedSocial =  Object.values(newSocialAr);
        API.updateSocial({
            social: formObject.updatedSocial,
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
                {props.rank} Audience Social Infleunces
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {socialList()}
                </ol>
            </Form>
            <Button onClick={addSocial}> Add Social</Button>
            <Button onClick={socialSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateSocial;