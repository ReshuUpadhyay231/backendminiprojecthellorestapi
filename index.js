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

app.get('/users/:id',(req,res)=>{       // routr tp get user by id
    const id=parseInt(req.params.id)
    const users=[
        {id: 1,name:'alice',age:22},
        {id: 2,name:'bob',age:25},
        {id: 3,name:'charlie',age:28}
    ]
    const user=users.find(u=>u.id==id)
    if(!user){
        return res.status(404).json({error:'user not found'})
    }
    res.json(user)
})

// route to -404 for unknown routes
app.use((res,req)=>{
    res.status(404).json({error:'route not find'})
})

// to start the server
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
