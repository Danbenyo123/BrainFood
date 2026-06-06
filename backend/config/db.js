const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    // the docs call process.exit(-1) here; I'd leave that out in dev
    // so a single dropped idle connection doesn't kill your whole server
});


module.exports = pool;