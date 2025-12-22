import "dotenv/config";
import express from "express";
const app = express();

import cors from "cors";
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Tudo ok por aqui!" });
})

import sendMail from "./mail.js";
import multer from "multer";
const upload = multer();

app.post('/send', upload.single('anexo'), async (req, res) => {
    const { nome, email, mensagem, anexo } = req.body;

    try {
        const response = await sendMail(email, nome, mensagem, anexo)
        res.json(response);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.listen(process.env.PORT || 3030, () => console.log("Servidor escutando na porta 3030..."));
