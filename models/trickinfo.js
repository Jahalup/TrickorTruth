const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trickortruthSchema = new Schema({
  firstname: { type: String, required: true },
  // lastname: { type: String, required: true },
  email:  { type: String, required: false },
  password: { type: String, required: true },
  // address: { type: String, required: false },
  // city: { type: String, required: false },
  // statechoice: { type: String, required: false },
  zipcode: { type: String, required: true },
  fulladdress:  { type: String, required: true },
  treats: { type: String, required: true },
  peanutfree: { type: String, required: true },
  healthy: { type: String, required: true },
  treattype: { type: String, required: false },
  codeword: { type: String, required: false }
});

const Trickortruth = mongoose.model("Trickortruth", trickortruthSchema);

module.exports = Trickortruth;

