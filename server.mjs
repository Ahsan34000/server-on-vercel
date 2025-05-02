import express from 'express';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 5001;
//192.168.0.108:5000

app.use(cors())

app.get('/' , (req, res) => {
    console.log(req.ip)
    res.send("Hello world")

})

//url parameter
//http://localhost:5001/get-weather/karachi/78500

//query paramter
//http://localhost:5001/get-weather/karachi/78500?city=karachi&zip=78500


app.get('/get-weather/:cityName', (req ,  res)=>{

  let cityname = req.params.cityName

  res.send({
    "city" : cityname, 
    "tempreture" : 40, 
    "humidity" : 39, 
    "wind": "50kam/h",
    "min": 39,
    "max": 40,
    "feelslike":46,
    
   
  })

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//get: ager me aoi banaraha hon waha sy data respone lyraha ho to get kronga
//post:ager me koi user add karwana chahoga ya fr student add karwana chahu ga to post lagaoga
//fetch:agr me user ko edit karwana chahuga to fatch ya put lagaoga
//delete:agr me user ya student kisi b chiz ko delete karna chahu ga tu delete lagaoga