const {Schema, model, default: mongoose} = require("mongoose")
const movieSchema = new Schema(
    {
        title: String, 
        genre: String, 
        plot: String,
        cast: [{
            type: mongoose.Squema.Types.ObjectId, ref: "Celebrity"
        }]

    }
)

module.exports = model("movie", movieSchema)