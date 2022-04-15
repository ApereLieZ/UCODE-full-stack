const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function FogetPassword(email, password) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'nodejsyivanov@gmail.com',
      pass: '1qaZXCVB'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'yivanov <nodejsyivanov@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "yivanov", // Subject line
    text: "Foget password ?", // plain text body
    html: `<b>Your password: ${password}</b>`, // html body
  });
}
