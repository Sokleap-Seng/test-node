const express = require('express');
const fs = require ("fs");
const app =  express();
const {db} = require('./database')


const PROT = 3001;
app.listen(PROT,() =>{
    console.log ('ma ma koko');
})



app.get('/',(req,res) =>{
    res.send ('Hello');
});
app.get('/users', (req,res) =>{
    let sql = "select * from users"
    db.query(sql,(error,result) =>{
        if (error){
            return console.log(error)
        }
        res.send(result)
    })
});

// app.get('/product',(req,res) =>{
//     let product = [{
//          id: 1,
//         name : 'product',
//         price : '1000$'
//     },
//     {
//         id: 1,
//        name : 'product',
//        price : '1000$'
//    },
//    {
//     id: 1,
//    name : 'product',
//    price : '1000$'
// }
       
//     ]
//     res.send (product);
// });


// app.get('/user', (req, res)=>{
//     let user = [
//         {
//             id : 2,
//             name : 'ha ha ma ma',
//             email : " haha@gmail.com"
//         },
//         {
//             id : 2,
//             name : 'ha ha ma ma',
//             email : " haha@gmail.com"
//         },
//         {
//             id : 2,
//             name : 'ha ha ma ma',
//             email : " haha@gmail.com"
//         }
//     ]
//     res.send(user)
// })

// app.get('/userlist', (req, res) =>{
//     let users = JSON.parse(fs.readFileSync('users.json')) ;
//    res.send (users);
// }
    

// );
// app.listen(3000,() =>{
//     console.log ('ma ma koko');
// })