import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  userName: String,
  passWord: String,
  address: String,
  mobNum: Number,
  latitude: Number,
  longitude: Number,
  selectedFile: String
});

const CustomerDetails = mongoose.model("Customerdetails", customerSchema);

export default CustomerDetails;
