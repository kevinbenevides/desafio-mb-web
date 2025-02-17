const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Servidor está ativo</h1> <h2>Para acessar a rota do projeto, clique no link ao lado: <h2><a href='http://localhost:3001/registration'>MB - Projeto de registro</a>");
});

app.use(express.static(path.resolve('../frontend/dist')));

app.get("/registration", (req, res) => {
    res.sendFile(path.resolve("../frontend/dist/index.html"));
});


app.post("/registration", (req, res) => {
    const {
      email,
      userType,
      name,
      cpf,
      cnpj,
      companyName,
      birthDate,
      openDate,
      phone,
      password,
      isError
    } = req.body;
  
    // Verifica se algum campo está vazio
    if(userType === 'pf') {
        if (
            !email ||
            !userType ||
            !name ||
            !cpf ||
            !birthDate ||
            !phone ||
            !password
        ) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    } else {
        if (
            !email ||
            !userType ||
            !companyName ||
            !cnpj ||
            !openDate ||
            !phone ||
            !password
        ) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    }

    if (isError) {
        return res.status(500).json({ error: "Ocorreu um problema no servidor. Tente novamente mais tarde."});
    }
        
    return res
      .status(200)
      .json({ message: "Formulário cadastrado com sucesso!" });
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})