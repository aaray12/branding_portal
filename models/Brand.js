const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BrandSchema = new Schema({
    userId: String,
    brandName: String,
    mission: String,
    vision: String,
    values: Array,
    manifesto: String,
    competition: Array,
    marketing: Object,
    originIndex: String,
    originID: String,



});
const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;