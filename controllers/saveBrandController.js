const User = require("../models/User");
const Brand = require("../models/Brand")
const mongojs = require("mongojs");
const {cloudinary} = require ('../config/cloudinary')

const brand = {

    saveBrand: (req, res) => {
        console.log(req.body.values)
        const brandObj = {
            brandName: req.body.brandName,
            userId: req.body.userId,
            mission: req.body.mission,
            vision: req.body.vision,
            values:req.body.values,
            manifesto:req.body.manifesto,
            // colors:[],
            // fonts:[],
            competition: {},
            // audience:{},
            marketing:{initial: "Init"},
            // graph:[],
            // tiles:{},
            // styleGuide:[],
            originID: req.body.userId,
            originIndex: req.body.originIndex
        }
        index = "brand"
        Brand.create(brandObj)
        .then(()=> User.findByIdAndUpdate({_id: mongojs.ObjectId(req.body.userId)}, {$push: { [index]: brandObj} }, { new: true } ))
        .then(userBrand => {
            console.log(userBrand)
            res.json(userBrand);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
    },

    getBrand: (req, res) => {
        User.findById(req.params.id).then((data)=> {
            const myBrandList = data.brand;
            // console.log(myBrandList)
            res.json(myBrandList)
        })
    },
    getUsers: (req, res) => {
        User.find({},{name:1, email:1, brand:1, brandRead:1, brandRW: 1, userType: 1}).then((data)=> {
            const myUserList = data;

            // console.log(myUserList)
            res.json(myUserList)
        })
    },
    saveBrandColors: (req, res) => {
        console.log("colors cl: ", req.body.colors)
        var index = "brand." + req.body.BI + ".colors"
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: req.body.colors} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    uploadImage: async (req, res) => {
        console.log("hit")
        try {
            const fileStr = req.body.data;
            console.log(req.body.userid)
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,'convergenx', {type: "private", tags: req.body.imgName, folder: req.body.folderName }
            )
            // console.log(uploadedResponse.public_id)
            console.log("yup" +uploadedResponse.secure_url)
            var index = "brand." + req.body.BI + ".images"
            var response = {url: uploadedResponse.secure_url, imgID: uploadedResponse.public_id, imageName: req.body.imgName }
           User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$push: { [index]: response}}, { new: true } )
            .then(userBrand => {
                res.json(userBrand);
            })
        //     res.json({msg: "Img Uploaded"})
        } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Something went wrong'})
        }
    },
    
    uploadLogo: async (req, res) => {

        try {
            const fileStr = req.body.data;
            console.log(req.body.userid)
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,'convergenx', {type: "private", tags: req.body.logoName, folder: req.body.folderName  }
            )
            // console.log("yup" +uploadedResponse.secure_url)
            var index = "brand." + req.body.BI + ".logo"
            var response = {
                url: uploadedResponse.secure_url,
                logoName: req.body.logoName
            }
           User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$push: { [index]: response} }, { new: true } )
            .then(userBrand => {
                res.json(userBrand);
            })
        //     res.json({msg: "Img Uploaded"})
        } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Something went wrong'})
        }
    },
    saveTileStyles: (req, res) => {
        console.log("tile Style: ", req.body)
        console.log("index: ", req.body)
        let index = "brand."+req.body.BI+".tiles." + req.body.name
        console.log("index: ", index)
        let tileStyle={
            name: req.body.name,
            backgroundColor: req.body.backgroundColor,
            font: req.body.font,
            fontColor: req.body.fontColor,
            hideHeader: req.body.hideHeader
        }
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: tileStyle} }, { new: true } )
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    },
    uploadSG: async (req, res) => {

        try {
            const fileStr = req.body.data;
            console.log(req.body.userid)
            // console.log(uploadedResponse.public_id)
            var index = "brand." + req.body.BI + ".styleGuide"
           User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$set: { [index]: sgAr} }, { new: true } )
            .then(userBrand => {
                res.json(userBrand);
            })
        //     res.json({msg: "Img Uploaded"})
        } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Something went wrong'})
        }
    },
    registerUser: (req, res)=> {
        let index = "registeredUser"
        let registerUser ={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType
        }
        User.updateOne({_id: mongojs.ObjectId(req.body.userid)}, {$push: { [index]: registerUser} })
        .then(userBrand => {
            res.json(userBrand);
        })
        .catch(err => {
            res.json(err);
        })
    }
};

module.exports = brand;