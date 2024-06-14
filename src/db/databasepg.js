//config
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













// app.post('/signup', async (req, res) => {
//     const { table, columns, values } = req.body;
//     try {
//         const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.map((v, i) => `$${i + 1}`).join(', ')}) RETURNING *;`;
//         const result = await client.query(query, values);
//         res.json(result.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.post('/login', async (req, res) => {
//     const { table, values } = req.body;
//   try {
//         const q = `SELECT * FROM ${table}`;
//         const result = await client.query(q, values);
//         if (result.rows.length === 0) {
//             return res.json({ message: 'User not found' });
//         }    
//   } catch (err) {
//         console.error(err.message);
//         res.send('Server Error');
//     }
// });


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

