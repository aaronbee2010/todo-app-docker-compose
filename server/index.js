const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const pg = require("pg");
const { Client } = pg;
const client = new Client({
    user: "postgres",
    password: "password123",
    host: "database",
    port: 5432,
    database: "postgres",
});
client.connect();

const cors = require("cors");
app.use(cors());

app.get('/api/v1/todos', async (req, res) => {
    try {
        const data = await client.query("SELECT * FROM todos");
        res.json(data.rows);
    } catch (err) {
        console.log(err);
    }
});

app.post('/api/v1/todos', async (req, res) => {
    try {
        const query = await client.query(
            "INSERT INTO todos (message) VALUES ($1)",
            [ req.body.message ]
        );
        if (query.rowCount > 0) {
            res.status(201).json({success: true, message: "Added new todo"});
        } else {
            res.status(500).json({success: false, message: "Failed to add todo"});
        }
    } catch (err) {
        console.log(err);
    }
});

app.patch('/api/v1/todos/:id/complete', async (req, res) => {
    try {
        const query = await client.query(
            "UPDATE todos SET datemodified = NOW(), iscomplete = true WHERE id = $1",
            [ req.params.id ]
        );
        if (query.rowCount > 0) {
            res.json({success: true, message: `Marked todo ${req.params.id} as complete`});
        } else {
            res.status(500).json({success: false, message: `Failed to mark todo ${req.params.id} as complete`});
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
