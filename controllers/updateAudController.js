const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");
// const {cloudinary} = require ('../config/cloudinary')

const updateAud = {

    updateAudJTB: (req, res) => {
        // console.log(req.body.messages)
       
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".JTB";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.jtbs} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudPains: (req, res) => {
        // console.log(req.body.messages)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".pains";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.pains} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudGains: (req, res) => {
        console.log(req.body.userid)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".gains";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.gains} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudInsights: (req, res) => {
        // console.log(req.body.messages)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".insight";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.insights} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudDemographics:(req, res) => {
        // console.log(req.body.messages)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".demographics";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.demographics} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudPsychograhics:(req, res) => {
        console.log(req.body.psychograhics)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".psychographics";
        console.log(rank)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.psychograhics} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudArch: (req, res) => {
        console.log(req.body.userid)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".archetype";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.archs} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudMedia: (req, res) => {
        console.log(req.body.userid)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".influences.media";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.media} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudHabits: (req, res) => {
        console.log(req.body.userid)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".influences.habits";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.habits} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateAudSocial: (req, res) => {
        console.log(req.body.userid)
        const rank = "brand."+req.body.BI+".audience." + req.body.rank + ".influences.social";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.social} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
}

module.exports = updateAud;