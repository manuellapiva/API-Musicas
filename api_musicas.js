const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let musicas = [
    {
        id: 1,
        nomemusica: "Pay no Rent",
        autor: "Turnpike Troubadours",
        link: "https://www.youtube.com/watch?v=sieOSRVQh3Q&quot"
    },
        {
        id: 2,
        nomemusica: "The Cowboy in Me",
        autor: "Tim McGraw",
        link: "https://www.youtube.com/watch?v=9ECKaPrAGds&quot"
    },
        {
        id: 3,
        nomemusica: "Chasing Tornadoes",
        autor: "MacKenzie Porter",
        link: "https://www.youtube.com/watch?v=xJX4jAEpsp0&quot"
    },
        {
        id: 4,
        nomemusica: "Heaven's Gate",
        autor: "Kevin Coster",
        link: "https://www.youtube.com/watch?v=YMsa8nGF9VQ&quot"
    }
]

let proximoId = 5

app.put("/musicas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {nomemusica, autor, link} = req.body;

    if (!nomemusica || !autor || !link) {
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios",
        });
    }

    const index = musicas.findIndex((p) => p.id === id);

    if (index !== -1) {
        musicas[index] = {
            id,
            nomemusica,
            autor,
            link
        };
        res.status(200).json(musicas[index]);
    } else {
        res.status(404).json({
            mensagem: `Música ${id} não encontrada`,
        });
    }
});

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});