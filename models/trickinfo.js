const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trickortruthSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email:  { type: String, required: false },
  password: { type: String, required: false },
  // address: { type: String, required: false },
  // city: { type: String, required: false },
  // statechoice: { type: String, required: false },
  // zipcode: { type: String, required: false },
  fulladdress:  { type: String, required: false },
  treats: { type: String, required: false },
  peanutfree: { type: String, required: false },
  healthy: { type: String, required: false },
  treattype: { type: String, required: false },
  codeword: { type: String, required: false }
});

const Trickortruth = mongoose.model("Trickortruth", trickortruthSchema);

module.exports = Trickortruth;

