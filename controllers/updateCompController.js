const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");
const {cloudinary} = require ('../config/cloudinary')

const updateComp = {
    updateCompName: (req, res) => {
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".compName";
        console.log(rank)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.updatedName} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateSWOT: (req, res)=>{
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".swot"
        let newSWOT = {}
        newSWOT = req.body.updatedSWOT
        console.log(newSWOT)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: newSWOT} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateCompSite: (req, res) => {
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".compSite";
        console.log(rank)
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.updatedSite} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateCompMsg: (req, res) => {
        console.log(req.body.messages)
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".compMessages";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.messages} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    updateCompArch: (req, res) => {
        // console.log(req.body.messages)
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".compArch";
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [rank]: req.body.archs} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },

    updateCompLogos: async(req, res) => {
        // console.log(req.body)
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".logo";
        try {
            const fileStr = req.body.data;
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,'convergenx', {type: "private", tags: req.body.logoName, folder: req.body.folderName  })
            var response = {
                url: uploadedResponse.secure_url,
                logoName: req.body.logoName
            }
           User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$push: { [rank]: response} }, { new: true } )
            .then(userBrand => {
                res.json(userBrand);
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Something went wrong'})
        }
    },
    updateCompBA: async(req, res) => {
        // console.log(req.body)
        const rank = "brand."+req.body.BI+".competition." + req.body.rank + ".brandassets";
        try {
            const fileStr = req.body.data;
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,'convergenx', {type: "private", tags: req.body.imgName, folder: req.body.folderName  })
            var response = {
                url: uploadedResponse.secure_url,
                name: req.body.imgName
            }
           User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$push: { [rank]: response} }, { new: true } )
            .then(userBrand => {
                res.json(userBrand);
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Something went wrong'})
        }
    },

}
module.exports = updateComp;