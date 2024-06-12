const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "warranty":String,
        "price":String
    }
)
let watchmodel=mongoose.model("watches",schema);
module.exports={watchmodel}