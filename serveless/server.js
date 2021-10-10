const nodemailer = require("nodemailer")
require("dotenv").config()

exports.handler = async function(e, context, callback) {
    console.log('teste')
    if (e.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            body: "Método não permitido!" 
        }
    }

    const transport = {
        host: 'smtp-mail.outlook.com', // Don’t forget to replace with the SMTP host of your provider
        port: 587,
        auth: {
        user: process.env.USER,
        pass: process.env.PASS
        }
    }
  
    const transporter = nodemailer.createTransport(transport)
    const params = JSON.parse(e.body);

    const nome = params.name
    const email = params.email
    const message = params.message

    const content = `Nome do Cliente: ${nome}
                \nEmail: ${email}
                \nMensagem: ${message}`
    const mail = {
        from: 'italocod@hotmail.com',
        to: 'italocod@hotmail.com',  // Change to email address that you want to receive messages on
        subject: `Mensagem do Portfolio: ${nome}`,
        text: content
    }

    return transporter.sendMail(mail)
    .then(() => {
        callback(null, { statusCode: 200, body: "Success" });
    })
    .catch(e => callback(e, { statusCode: 500, body: "Error sending email" }))
}