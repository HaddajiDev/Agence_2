const { Client } = require('pg');

async function select_(col) {
    const client = new Client({
        
        user: 'postgres',
        host: 'localhost',
        database: 'mydb',
        password: '12345',
        port: 5432, 
    });

    await client.connect();

    try {
        const res = await client.query(`SELECT ${col} FROM public."user" WHERE id = 1;`);
        await client.end();
        return res.rows;
    } catch (err) {
        console.error(err.message);
        await client.end();
        return 0;
    }
}

async function main() {
    const result = await select_("name");
    console.log(result[0].name);
}

main();



