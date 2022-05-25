const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
      roles: {
      type: [String],
      enum: ["user", "admin", "super_admin"],
      default: ["user"],
    },
  
  timestamps: true,  //to include createdAt and updatedAt
  });

  const User = mongoose.model("User", userSchema);

  export default User;