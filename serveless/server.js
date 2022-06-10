const nodemailer = require("nodemailer");
require("dotenv").config();

console.log(process.env.SUBJECT);
exports.handler = async function (e, context, callback) {
  if (e.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Método não permitido!",
    };
  }

  const transport = {
    host: process.env.SMTP_MAIL, // Don’t forget to replace with the SMTP host of your provider
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  };

  const transporter = nodemailer.createTransport(transport);
  const params = JSON.parse(e.body);

  const nome = params.name;
  const email = params.email;
  const telefone = params.telefone;
  const message = params.message;

  const content = `<h1>Nome do Recrutador: <b>${nome}</b></h1>
                    <h1>Telefone: <b>${telefone}</b></h1>
                    <h1>Email: <b>${email}</b> </h1>
                    <h1>Mensagem: <b>${message}</b> </h1>`;
  const fromMail = `"Portifólio" <${process.env.USER}>`;
  const mail = {
    from: fromMail,
    to: process.env.SUBJECT, // Change to email address that you want to receive messages on
    replyTo: process.env.USER,
    subject: `Mensagem do Portfolio: ${nome}`,
    html: content,
  };

  try {
    let info = await transporter.sendMail(mail);
    // Log the result
    callback(null, { statusCode: 200, body: JSON.stringify(info) });
  } catch (error) {
    callback(error);
  }
};
