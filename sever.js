const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static('CONTACT'))
//get the form
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/CONTACT/cont.html')
});
//post the form
app.post('/CONTACT/cont2.html', (req, res)=>{
         
    const myName = req.body.myName;
    const email = req.body.email;
    const phone = req.body.phone;
    const time = req.body.time;
    const statuz = req.body.statuz;
    const mycomment = req.body.message;
    const male = req.body.male;
    const female = req.body.female;
    const country = req.body.country;
    const address = req.body.address;
    
    //send email to inbox
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.USER,
            pass:process.env.PASS_WORD
        }
    })
    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: `A message from ${statuz}. ${myName} at ${time}.`,
        text: `${mycomment}. These are my details viz: \n Phone no: ${phone}\n Address: ${address}\n Email: ${email}\n Country:${country}\n Gender: Male/${male},Female/${female} `
    }
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log('Error has occurred sending the message')
        }else{
            res.sendFile(__dirname + '/CONTACT/cont2.html')
        }
        
    console.log(info)
    })
       
    
    });
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}!`));