const nodemailer = require("nodemailer");

const { config } = require('../../config/config');

async function filmsAppMailer(destinatary, ) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'ccorreamd@gmail.com',
      pass: `${config.mailerPassword}`,
    },
  });

  let info = await transporter.sendMail({
    from: '"Charly Correa" <ccorreamd@gmail.com>',
    to: `${destinatary}`,
    subject: "Welcome to Films Manager 👻", // Subject line
    text: "Now you are a confirmed user of Films Manager App, a way to administrate Movies, Series and Films",
    html: "<b>Now you are a confirmed user of Films Manager App, a way to administrate Movies, Series and Films</b>",
  });

  console.log("Message sent: %s", info.messageId);

}

module.exports = filmsAppMailer;
