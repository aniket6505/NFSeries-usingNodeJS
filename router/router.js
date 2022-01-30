import express from 'express';
import {getAllSeries,createSeries,deleteSeries,updateSeries} from '../controller/controller.js'

const router=express.Router()

router.get('/getAll',getAllSeries)
router.post('/addSeries',createSeries)
router.delete('/delete/:id',deleteSeries)
router.patch('/update/:id',updateSeries)



export default router;