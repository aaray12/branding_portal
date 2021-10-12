import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../../../../../utils/API"

function UpdateFonts(props) {
    const [formObject, setFormObject] = React.useState({})
    const [fontsNameObject, setFontsNameObject] = React.useState({fonts: props.fonts})
    const [fontsLinkObject, setFontsLinkObject] = React.useState({fonts: props.fonts})
    const [fontsCSSObject, setFontsCSSObject] = React.useState({fonts: props.fonts})
    const [fontsName, setFontsName] = React.useState()
    const [fontsLink, setFontsLink] = React.useState()
    const [fontsCSS, setFontsCSS] = React.useState()

    function handleFontsName(event){
        const { name, value } = event.target;
        setFontsName({...fontsName, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleFontsLink(event){
        const { name, value } = event.target;
        setFontsLink({...fontsCSS, [name]: value})
        // console.log(Object.values(valueName))
    }
    function handleFontsCSS(event){
        const { name, value } = event.target;
        setFontsCSS({...fontsLink, [name]: value})
        // console.log(Object.values(valueName))
    }

    function fontsList() {
        let fonts = []
        if (fontsNameObject.fonts.length == 0) {
            fonts.push(<li>
                <p>Click Add Fonts to save new Fonts</p>
            </li>)
        }
        else{
            for( var i = 0; i < fontsNameObject.fonts.length; i++){
               var fontsName = "Fonts" + i
               var fontsLink = "FontsLink" + i
               var fontsCSS = "FontsCSS" + i
            //    console.log(fontsNameObject)
                fonts.push(<li>
                    <h5>Font Name:</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={fontsNameObject.fonts[i].name} name={fontsName} onChange={handleFontsName}/>
                    </Form.Group>
                    <h5>Font Link:</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={fontsLinkObject.fonts[i].link} name={fontsLink} onChange={handleFontsLink}/>
                    </Form.Group>
                    <h5>CSS Code</h5>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder={fontsCSSObject.fonts[i].css} name={fontsCSS} onChange={handleFontsCSS}/>
                    </Form.Group>
                    <Button onClick = {deleteFonts} name ={i} >X</Button>
                </li>)
            }
        }
        return(fonts)
    }
    function addFonts(){
        fontsNameObject.fonts.push("New Font")
        // console.log(ArchObject.messages)
    }
    function deleteFonts(event){
        const { name} = event.target;
        var index = name
        console.log(index)
        if(index > -1){
            fontsNameObject.fonts.splice(index, 1);
        }
    }
    function fontsSave(event){
        event.preventDefault()
        let newFontsAr = [];
       
        for(var i = 0; i < fontsNameObject.fonts.length; i ++){
            let fName;
            let fLink;
            let fCSS;
            if(document.getElementsByName("Fonts"+(i))[0].value){
                fName = document.getElementsByName("Fonts"+(i))[0].value;
            }
            else{
                fName = fontsNameObject.fonts[i].name;
            }
            if(document.getElementsByName("FontsLink"+(i))[0].value){
                fLink = document.getElementsByName("FontsLink"+(i))[0].value;
            }
            else{
                fLink = fontsNameObject.fonts[i].link;
            }
            if(document.getElementsByName("FontsCSS"+(i))[0].value){
                console.log(document.getElementsByName("FontsCSS"+(i))[0].value)
                fCSS = document.getElementsByName("FontsCSS"+(i))[0].value;
            }
            else{
                console.log(fontsNameObject.fonts[i].css)
                fCSS = fontsNameObject.fonts[i].css;
            }
            console.log(fName+" " + fLink +" " + fCSS)
            newFontsAr.push({
                name: fName,
                link: fLink,
                css: fCSS
            })
        }

        formObject.updatedFonts =  newFontsAr;
        console.log( newFontsAr)
        API.updateFonts({
            fonts: formObject.updatedFonts,
            BI: props.brandid,
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
                Brand Fonts
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <ol>
                {fontsList()}
                </ol>
            </Form>
            <Button onClick={addFonts}> Add Font</Button>
            <Button onClick={fontsSave}> Update</Button>
        </Modal.Body>
    </Modal>
    )
}

export default UpdateFonts;