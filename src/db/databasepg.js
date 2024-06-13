const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

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

async function connect(){
    await client.connect();
}

connect();

app.post('/insert', async (req, res) => {
    const { table, columns, values } = req.body;
    try {
        const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.map((v, i) => `$${i + 1}`).join(', ')}) RETURNING *;`;
        const result = await client.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
