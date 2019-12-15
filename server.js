if (process.end.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api/form", (req, res) => {
  const messageSent = `
            <h3>E-mail details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>E-mail: ${req.body.email}</li>
            </ul>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
        `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "dimitrijevicaleksander.dev@gmail.com", // generated ethereal user
        pass: "Mila2018Dm_" // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"User form" <dimitrijevicaleksander.dev@gmail.com>', // sender address
      to: "aleksander.dimitrijevic@gmail.com", // list of receivers
      subject: "Hello ✔", // plain text body
      html: messageSent // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
