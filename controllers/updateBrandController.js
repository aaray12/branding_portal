const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");
const {cloudinary} = require ('../config/cloudinary')

const updateBrand = {

    updateMission: (req, res) => {
        console.log(req.body)
        const newMission = req.body.mission;
        console.log( req.body.mission)
        var index = "brand." + req.body.BI + ".mission"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newMission} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateVision: (req, res) => {
        const newVision = req.body.vision;
        console.log( req.body.vision)
        var index = "brand." + req.body.BI + ".vision"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newVision} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateMani: (req, res) => {
        const newMani = req.body.mani;
        console.log( req.body.mani)
        var index = "brand." + req.body.BI + ".manifesto"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newMani} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateValues: (req, res) => {
        const newValues = req.body.values;
        console.log( req.body.userid)
        var index = "brand." + req.body.BI + ".values"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newValues} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateImages: (req, res) => {
        console.log(req.body)
        var index = "brand." + req.body.BI + ".images"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: req.body.updatedImages} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
        console.log("hit")
        cloudinary.api.delete_resources_by_tag(req.body.deletedImaged, function (error, result) {console.log(result, error)})
        // cloudinary.v2.uploader.destroy(req.body.deletedImaged, function(error,result) {
        //     console.log(result, error) });
    },
    deleteLogo: (req, res) => {
        var index = "brand." + req.body.BI + ".logo"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: req.body.updatedLogos} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
        cloudinary.api.delete_resources_by_tag(req.body.deletedLogo, function (error, result) {console.log(result, error)})
        // cloudinary.api.delete_resources([req.body.deletedLogo], function (error, result) {console.log(result, error)})
    },

    updateVoice: (req, res)=>{
        newVoice = req.body.voice;
        var index = "brand." + req.body.BI + ".voice"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newVoice} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateMessaging: (req, res)=>{
        newMessaging = req.body.messaging;
        var index = "brand." + req.body.BI + ".messaging"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newMessaging} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateTaglines: (req, res)=>{
        console.log(req.body)
        newTaglines = req.body.tagline;
        var index = "brand." + req.body.BI + ".taglines"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newTaglines} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateFonts: (req, res)=>{
        console.log(req.body)
        newFonts = req.body.fonts;
        var index = "brand." + req.body.BI + ".fonts"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: newFonts} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }
    

};
module.exports = updateBrand;