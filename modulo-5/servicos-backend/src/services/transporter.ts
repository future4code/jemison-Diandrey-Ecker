import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

//configuraçao do nodemailer
export const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NOMEMAILER_PASS,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
})