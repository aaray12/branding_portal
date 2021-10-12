const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");


const updateMark = {
  
    updateSubStrats: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.subStrats";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.subStrats} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAwareness: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.awareness";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.awareness} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateInterest: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.interests";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.interests} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateDesire: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.desires";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.desires} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAction: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.actions";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.actions} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateDigital: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.digital";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.digital} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateInPerson: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.inPerson";
        console.log(rank)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.IP} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updatePrints: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.prints";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.prints} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateOther: (req, res) => {
        const rank = "brand."+req.body.BI+".marketing.other";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.other} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
   
}
module.exports = updateMark;