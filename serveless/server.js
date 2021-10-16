const nodemailer = require("nodemailer")
require("dotenv").config()

exports.handler = async function(e, context, callback) {
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
    const telefone = params.telefone
    const message = params.message

    const content = `<h1>Nome do Recrutador: <b>${nome}</b></h1>
                    <h1>Telefone: <b>${telefone}</b></h1>
                    <h1>Email: <b>${email}</b> </h1>
                    <h1>Mensagem: <b>${message}</b> </h1>`
    const mail = {
        from: process.env.USER,
        to: process.env.SUBJECT,  // Change to email address that you want to receive messages on
        subject: `Mensagem do Portfolio: ${nome}`,
        html: content
    }

    try {
        let info = await transporter.sendMail(mail)
        // Log the result
        callback(null, { statusCode: 200, body: JSON.stringify(info) });
    } catch(error) {
        callback(error)
    }
    
}