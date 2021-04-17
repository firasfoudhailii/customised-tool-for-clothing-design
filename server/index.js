import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer'


const app = express();

app.use(decodeJWT);

app.use(bodyparser.json({ limit: "30mb, extended: true" }));
app.use(bodyparser.urlencoded({ limit: "30mb, extended: true" }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://phray:phray123@cluster0.etmzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);


// const router = express.Router();
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// const contactEmail = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//       user: "mohamedyassine.ali@esprit.tn",
//       pass: "193JMT4284",
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });
//   router.post("/contactus", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "mohamedyassine.ali@esprit.tn",
//       subject: "Contact Form Message",
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "failed" });
//       } else {
//         res.json({ status: "sent" });
//       }
//     });
//   });