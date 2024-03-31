import bodyParser from 'body-parser';
import express from 'express';
import fileRoute from './route/filesystem'

const app = express()
const cors = require('cors')

app.use(cors())

const PORT = 4000;

app.use(bodyParser.json());

//middleware routes
app.use('/api', fileRoute)

app.listen(PORT, ()=>{
    console.log('Server running at 4000');
})