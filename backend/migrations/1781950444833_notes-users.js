/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const up = (pgm) => {
    pgm.sql(`
            CREATE TABLE users (
                id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                username VARCHAR(100) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMPTZ DEFAULT now(),
                
            );
            ALTER TABLE notes ADD COLUMN user_id BIGINT REFERENCES users(id) ON DELETE CASCADE;
            CREATE INDEX user_notes ON notes(user_id);
        `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const down = (pgm) => { 
    pgm.sql(
        `
            DROP INDEX user_notes;
            ALTER TABLE notes DROP COLUMN user_id;
            DROP TABLE users;
        `
    );
};

module.exports = {
    shorthands,
    up,
    down
};
