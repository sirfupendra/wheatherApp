const express= require('express');
const app= express();
const cors= require('cors');
const dotenv= require('dotenv');
const weatherroutes=require('./routes/weather');
dotenv.config();

app.use(cors());
app.use(express.json());   
app.use(express.urlencoded({extended:true}));


const port= process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.use('/weather',weatherroutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})