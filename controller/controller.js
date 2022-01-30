
import Series from '../model/model.js'

let SeriesDetails=[];

export const getAllSeries=(req,res) => {
    console.log("get All Series");
    Series.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const createSeries=(req, res) => {
    console.log("post new series");
    const SeriesDetails = new Series({
        name: req.body.name,
        img:req.body.img,
        summary: req.body.summary
    })
    SeriesDetails.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })

}

export const deleteSeries=(req, res) => {
    console.log("delete series details");
    Series.findByIdAndRemove(req.params.id)
    .then((result)=>{
        res.json({ result: 'sucess'});
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const updateSeries=(req, res) => {
    Series.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        img:req.body.img,
        summary: req.body.summary}
    )
    .then((result) => {
        res.json({result:'successfully updated'});
    })
    .catch((err)=>{
        console.log(err);
    })
}