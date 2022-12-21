const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
const { v4: uuidv4 } = require('uuid')
const updated = require('./updated.json')


// dbConfig.sync(
//     {
//     logging: console.log,
//     force: true
// }
// )
// .then(() =>{
//     console.log('connection to database established successfully.');
// })
// .catch(err => {
//     console.log("unable to connect to db",err);
// });

app.get('/get',(req,res)=>{
    res.send(updated);
})

app.post('/add',async (req,res)=>{
    console.log(req.body);
    req.body.data.id = uuidv4()
updated.push(req.body.data)
res.send({msg:"successfully added",data:updated});

})  

app.post('/remove',(req,res)=>{
    console.log(req.body);
    let find1 = updated.find(o=>o.id == req.body.id)
    let find = updated.indexOf(find1)
    updated.splice(find,1)
    // console.log(updated);
    res.send({msg:"successfully deleted",data:updated});
})


app.listen(3001,console.log("server is running in 3001"))


const Data = require('./Data.json')
// const fs = require('fs')

// let updated = Data.items.map(data=>{
//     return {
//         id:uuidv4(),
//         title: data.volumeInfo.title,
//         publishedDate: data.volumeInfo.publishedDate,
//         pageCount: data.volumeInfo.pageCount? data.volumeInfo.pageCount: 300
//     }
// })

// fs.writeFileSync('./updated.json',JSON.stringify(updated))

// console.log(updated);
