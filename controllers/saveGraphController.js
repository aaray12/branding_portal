const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");

const saveGraph = {

    saveGraph: (req, res) =>{
        var graph = {
            scores: req.body.scores,
            labels: req.body.labels
        };
        console.log(req.body)
        console.log(graph)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { ["brand."+req.body.BI+".graph"]: graph} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }


}
module.exports = saveGraph;