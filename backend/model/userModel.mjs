import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  createdOn: { type: Date, default: Date.now },
});

const adminSchema = mongoose.Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
});
const otpSchema = new mongoose.Schema({
  otp: String,
  email: String,
  isUsed: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
});
const userModel = mongoose.model("Users", userSchema);
const otpModel = mongoose.model("Opts", otpSchema);
const adminModel = mongoose.model("admin", adminSchema);
export { otpModel, adminModel };
export default userModel;
