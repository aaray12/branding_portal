const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");

const saveAud = {

    saveAudience: (req, res) =>{
        // User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { "brand.o.audience": {}} }, { new: true } )
        // .then(userBrand => {
        //     res.json(userBrand);
        // })
        // .catch(err => {
        //     res.json(err);
        // })
        var audType = "brand."+req.body.BI+".audience."+ req.body.audRank
        var aud = {
            audName: req.body.audName,
            audRank: req.body.audRank,
            JTB:[],
            pains:[],
            gains:[],
            insight:[],
            demographics:[],
            psychographics:[],
            archetype:[],
            influences:{
                media:[],
                habits:[],
                social:[],
            }
            
           
   
        };
        console.log(req.body.audName)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [audType]: aud} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }


}
module.exports = saveAud;