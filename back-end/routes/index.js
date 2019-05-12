var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

var transport = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: creds.USER, // generated ethereal user
    pass: creds.PASS // generated ethereal password
  }
  // tls:{
  //   rejectUnauthorized:false
  // }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  const output = 
  `<p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`;

  let mail = {
    from: '"Nodemailer Contact" <your@email.com>', // sender address
    to: creds.RECEIVER_EMAIL, //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: "New Contact",
    html: output
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
