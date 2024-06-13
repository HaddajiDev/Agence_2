const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const { Client } = require('pg');

app.use(cors());
app.use(express.json());

const client = new Client({
        
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: '12345',
    port: 5432, 
});

client.connect();

app.post('/insert', async (req, res) => {
    const {name, role} = req.body;
    try {
        const query = `INSERT INTO public."user"(name, role) VALUES(${name}, ${role})`;
        const result = await client.query(query);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
