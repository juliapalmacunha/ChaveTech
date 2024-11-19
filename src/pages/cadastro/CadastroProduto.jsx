import React, { useState } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import iconeAnimado from "/imagens/assistencia-social.gif";

const CadastroProduto = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const estadosNordeste = [
    { label: "Alagoas", value: "AL" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Maranhão", value: "MA" },
    { label: "Paraíba", value: "PB" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Sergipe", value: "SE" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !telefone || !cidade || !estado) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      await addDoc(collection(db, "clientes"), {
        nome,
        telefone,
        cidade,
        estado,
        dataCadastro: new Date(),
      });

      alert("Cliente cadastrado com sucesso!");

      setNome("");
      setTelefone("");
      setCidade("");
      setEstado("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente: ", error);
      alert("Erro ao cadastrar cliente. Tente novamente.");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#FFFFFF"
      p={2}
      flexDirection="column"
    >
      <Box
        name="box"
        component="form"
        width="100%"
        maxWidth="800px"
        marginBottom="150px"
        p={3}
        bgcolor="white"
        boxShadow={3}
        borderRadius={4}
        zIndex="1"
        display="flex"
        flexDirection="row"
        gap={2}
        onSubmit={handleSubmit}
      >
        <Box width="50%" display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Nome"
            name="name"
            variant="outlined"
            fullWidth
            size="small"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Telefone"
            name="telefone"
            variant="outlined"
            fullWidth
            size="small"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <TextField
            label="Cidade"
            name="cidade"
            variant="outlined"
            fullWidth
            size="small"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <TextField
            label="Estado"
            name="estado"
            variant="outlined"
            fullWidth
            size="small"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            select
          >
            {estadosNordeste.map((estado) => (
              <MenuItem key={estado.value} value={estado.value}>
                {estado.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#043b71",
              mt: 2,
              fontFamily: "Be Vietnam Pro, sans-serif",
              textDecoration: "none",
            }}
            type="submit"
          >
            Enviar
          </Button>
        </Box>

        <figure style={{ margin: "auto" }}>
          <img
            style={{ width: "80px", height: "80px" }}
            src={iconeAnimado}
            alt="Ícone animado"
          />
        </figure>
      </Box>
    </Box>
  );
};

export default CadastroProduto;
