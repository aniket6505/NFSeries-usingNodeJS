import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Seriesrouter from './router/router.js'



const app = express()
mongoose.connect('mongodb+srv://anikettest:anikettest@cluster0.lmjmf.mongodb.net/testDB?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true})


.then((result) => {
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})
app.use(cors())
app.use(bodyParser.json())
const PORT=3000



app.listen(PORT)
app.get("/", function(req, res){
    res.send("welcome to my homepage")
})

app.use("/series",Seriesrouter );