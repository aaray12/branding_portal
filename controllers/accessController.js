const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");
// const {cloudinary} = require ('../config/cloudinary')

const access = {

    
    // getBrand: (req, res) => {
    //     User.findById(req.params.id).then((data)=> {
    //         const myBrandList = data.brand;
    //         // console.log(data.brand)
    //         res.json(myBrandList)
    //     })
    // },
    // getUsers: (req, res) => {
    //     User.find({},{name:1, email:1}).then((data)=> {
    //         const myUserList = data;

    //         console.log(myUserList)
    //         res.json(myUserList)
    //     })
    // },
    // saveBrandColors: (req, res) => {
    //     console.log("colors cl: ", req.body.colors)
    //     var index = "brand." + req.body.BI + ".colors"
    //     User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: req.body.colors} }, { new: true } )
    //     .then(userBrand => {
    //         res.json(userBrand);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     })
    // },
    giveReadAccess: (req, res) => {
        console.log("hit back end")
        console.log(req.body)
        var index = "brandRead"
        User.updateOne({_id: mongojs.ObjectId(req.body.accessID)}, {$push: { [index]: req.body.brand} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
        // User.updateOne({_id: mongojs.ObjectId(req.body.accessID)}, {$push: { "brand": req.body.brand} }, { new: true } )
        // .then(userBrand => {
        //     res.json(userBrand);
        // })
        // .catch(err => {
        //     res.json(err);
        // })
    },
    giveRWAccess: (req, res) => {
        var index = "brandRW"
        const brandInfo ={
            userID: req.body.userID,
            brand: req.body.brandName
        }
        console.log("hit")
        User.updateOne({_id: mongojs.ObjectId(req.body.accessID)}, {$push: { [index]: brandInfo} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
        const bIndex = "brand."+req.body.BI+".rwAccess"
        const rwObject ={
            name: req.body.rwName,
            id: req.body.accessID
        }
        User.updateOne({_id: mongojs.ObjectId(req.body.userID)}, {$push: { [bIndex]:rwObject} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }
};

module.exports = access;