//  Add your code here

const {Schema, model} = require("mogoose")

const celebritySchema = new Schema(
    {
    name: String,
    occupation: String,
    catchPhrase: String,
    }
)

module.exports = model("Celebrity", celebritySchema)