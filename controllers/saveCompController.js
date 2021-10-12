const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");

const saveComp = {

    saveComp1: (req, res) =>{
        var compType = "brand."+req.body.BI+".competition."+ req.body.competitorRank
        var comp = {
            compName: req.body.competitorName,
            compRank: req.body.competitorRank,
            compSite: "No Site Saved Yet",
            compMessages:[],
            compArch:[],
            swot:{strengths:[],
            weaknesses:[],
            oppertunities:[],threads:[]},
            brandassets:[],
            logo: [],
        };
        console.log(req.body.userid)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [compType]: comp} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }


}
module.exports = saveComp;