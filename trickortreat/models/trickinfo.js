const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trickortruthSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email:  { type: String, required: true },
  password: { type: String, required: true },
  street: { type: String, required: true },
  town: { type: String, required: true },
  Zip: { type: String, required: true },
  participant: { type: Boolean, required: true },
  peanutfree: { type: Boolean, required: true },
  healthy: { type: Boolean, required: true },
  type: { type: String, required: false },
  code: { type: String, required: false }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;