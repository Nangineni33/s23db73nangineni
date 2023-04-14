const mongoose = require("mongoose")
const catSchema = mongoose.Schema({
cat_name: String,
cat_color: String,
cat_weight: Number
})
module.exports = mongoose.model("cat",
catSchema)