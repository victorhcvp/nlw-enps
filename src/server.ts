import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Teste"});
});

app.post("/", (request, response) => {
    return response.json({message: "POST"});
});

app.listen(3333, () => console.log("Server running!"));