const express=require('express')
const app=express()
const PORT=3000

app.use(express.json()) //it is used to parse the incoming request body in JSON format

app.get('/',(req,res)=>{   //route 1 home poge
    res.json({message:'welcome to my first rest api'})
})

app.get('/about',(req,res)=>{       //about route
    app.json({
        namme:'my api',
        version:'1.0.0',
        author:'reshu'
    })
})

app.get('/users',(req,res)=>{     //user list
    const users=[
        {id: 1,name:'alice',age:22},
        {id: 2,name:'bob',age:25},
        {id: 3,name:'charlie',age:28}
    ]
    res.json(users)
})


