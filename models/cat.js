const mongoose = require("mongoose")
const catSchema = mongoose.Schema({
cat_name: String,
cat_color: String,
cat_weight: {
    type: Number,
    min: 9,
    max: 30
}
})
module.exports = mongoose.model("cat",
catSchema)