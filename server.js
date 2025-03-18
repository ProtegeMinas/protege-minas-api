const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Permite acesso público
app.use(express.json()); // Permite JSON no body das requisições

app.get("/", (req, res) => {
  res.json({ mensagem: "API do Protege Minas funcionando!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
