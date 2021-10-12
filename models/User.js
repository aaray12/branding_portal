const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  brand:[
    {
      brandName: String,
      mission: String,
      vision: String,
      values: Array,
      manifesto: String,
      colors: Object,
      fonts: Array,
      voice: String,
      competition: Object,
      graph: Array,
      images: Array,
      logo: Array,
      messaging: Array,
      taglines: Array,
      audience: Object,
      marketing: Object,
      tiles: Object,
      styleGuide: String,
      rwAccess: Array,
      originID: String,
      originIndex: String
    }
  ],
  brandRead:[],
  brandRW:[],
  userType: {
    type: String,
    required: true
  },
  registeredUser: Array
});

module.exports = User = mongoose.model("users", UserSchema);
