var Mailer = require("nodemailer");

// Inisialisasi Auth Gmail
var transportar = Mailer.createTransport({
  service: "gmail",
  auth: {
    user: '', //EmailAnda
    pass: '', //GeneratePassword
  },
});

// Mendefinisikan Opsi Email
var mailOptions = {
  from: "", // Email Penerima
  to: "", // Email Tujuan
  subject: "Hallo Indonesia", // Subjek Email
  html: "<h1>Selamat Datang Rusdi</h1>", // Deskripsi
};

// Kirim Email
transportar.sendMail(mailOptions, (error, info) => {
  if (error) console.log(error);
  console.log(info);
});