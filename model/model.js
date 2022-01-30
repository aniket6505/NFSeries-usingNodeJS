import mongoose from "mongoose";

const Schema = mongoose.Schema
const seriesDetailsSchema=new Schema({
    name:{type:String,
           required:true ,
            trim:true
         },
    img:{
        type:String,
        required:true

    },
    summary:{
        type:String,
        required:true
    }


},{timeStamp:true})


const Series=mongoose.model('Series',seriesDetailsSchema)

export default Series;