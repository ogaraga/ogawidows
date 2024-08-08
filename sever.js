const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('CONTACT'))
//get the form
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/CONTACT/cont.html')
});
//post the form
app.post('/', (req, res)=>{
    try {        
    const myName = req.body.myName;
    const email = req.body.email;
    const phone = req.body.phone;
    const time = req.body.time;
    const statuz = req.body.statuz;
    const mycomment = req.body.mycomment;
    const male = req.body.male;
    const female = req.body.female;
    const country = req.body.country;
    const address = req.body.address;
    
    //send email to inbox
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'raymond.ogaraga@gmail.com',
            pass:'qxfvfqwklfieagvf'
        }
    })
    const mailOptions = {
        from: email,
        to: 'raymond.ogaraga@gmail.com',
        subject: `A message from ${statuz}. ${myName} at ${time}.`,
        text: `${mycomment}. These are my details viz: \n Phone no: ${phone}\n Address: ${address}\n Email: ${email}\n Country:${country}\n Gender: Male/${male},Female/${female} `
    }
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err || (male === undefined && female === undefined)){
            console.log('error has occurred!')
        }else{
            console.log('Mail was sent: '+ info.response)
        }
    })
    
    } catch (error) {
        console.log(error.message)
    }
});
app.listen(5500, ()=>console.log('Server running @ port 5500!'));