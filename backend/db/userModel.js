const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // name field
  name: {
    type: String,
    required: [true, "Please provide an Name!"],
    unique: false,
  },

  //   email field
  email: {
    type: String,
    required: [true, "Please provide a email!"],
    unique: [true, "Email already exists"],
  },

  //  mobileNumber field
  mobileNumber: {
    type: Number,
    required: [true, "Mobile number is required"],
    unique: [true, "Mobile number already exists"]
  }
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
