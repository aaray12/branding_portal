import React from "react";
import { Card, Button } from 'react-bootstrap';
import BrandSettings from "./brandSettings"


function BrandSelect(props) {
    // console.log(props)
    const [modalShow, setModalShow] = React.useState(false);
    const [formObject, setFormObject] = React.useState({})
    let brands = []
    if (props.brands !== ["N/A"]) {
        brands = props.brands;
    }
    // console.log(props.users)

    for (var u = 0; u < props.users.length; u++) {
        if (props.name == props.users[u].name) {
            // if (props.users[u].brandRW.length > 0) {
            //     for (var c = 0; c < props.users[u].brandRW.length; c++) {
            //         for (var l = 0; l < props.users.length; l++) {
            //             for (var a = 0; a < props.users[l].brand.length; a++) {
            //                 if (props.users[u].brandRW[c].brand == props.users[l].brand[a].brandName) {
            //                     brands.push(props.users[l].brand[a])
            //                 }
            //             }
            //         }
            //     }
            // }
            for (var v = 0; v < props.users[u].brandRead.length; v++) {
                for (var t = 0; t < brands.length; t++) {
                    if (props.users[u].brandRead[v].brandName == brands[t].brandName) {
                        brands.splice(t, 1)
                    }
                }
            }
        }
    }
    // console.log(props)npm run dev

    function displayBrands() {
        let brandFonts = []
        function setLink() {
            for (var x = 0; x < brandFonts.length; x++) {
                document.head.innerHTML += brandFonts[x]
            }
            // document.head.innerHTML += link
        }
        // console.log(brands[1].originID)
        function accessSettings(brandID) {
            let bAccess;

            if (props.userID == brandID) {
                bAccess = <>
                    <Button style={{ margin: "auto", marginLeft: "2%" }} variant="secondary" name={brands[i].brandName} onClick={(e) => {
                        setFormObject({ name: e.target.name })
                        setModalShow(true)
                    }}>Access Settings</Button>
                    <BrandSettings
                        show={modalShow}
                        users={props.users}
                        userID={props.userID}
                        name={props.name}
                        brand={formObject.name}
                        brands={brands}
                        onHide={() => setModalShow(false)}
                    />
                </>
            }
            return (bAccess)
        }
        let brandsAr = [];

        for (var i = 0; i < brands.length; i++) {
            // console.log(brands[i])
            const brand = brands[i]
            // console.log(brand)
            let font;
            let image;
            if (brands[i].fonts) {
                if (brands[i].fonts[0] !== undefined) {
                    font = brands[i].fonts[0].css
                    brandFonts.push(brands[i].fonts[0].link)
                }
                else {
                    font = null
                }
            }
            if (brands[i].logo[0] !== undefined) {
                image = brands[i].logo[0].url
            }
            else {
                image = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }

            brandsAr.push(
                <div className="brandCards" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} style={{ width: "66%", margin: "auto", paddingTop: "5%" }} />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: [font] }}><h3>{brands[i].brandName}</h3></Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button name={brands[i].brandName} style={{ margin: "auto", marginRight: "2%" }} variant="primary" onClick={props.onEdit}>Edit</Button>
                            {accessSettings(brands[i].originID)}

                        </Card.Body>
                    </Card>
                </div>
            )
        }
        React.useEffect(() => { setLink() }, []);

        return brandsAr;
    }

    return (
        <div style={{ width: "100%" }} id="brandCardsDiv">
            {displayBrands()}
        </div>
    )
}

export default BrandSelect;