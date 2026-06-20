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
            CREATE TABLE clusters (
                cluster_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                cluster_name TEXT NOT NULL,
                cluster_description TEXT
            );
            ALTER TABLE notes ADD COLUMN cluster_id BIGINT REFERENCES clusters(cluster_id);
            CREATE INDEX cluster_notes ON notes(cluster_id);
            ALTER TABLE users DROP COLUMN updated_at;
        `) 
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const down = (pgm) => {
    pgm.sql(`
            DROP INDEX cluster_notes;
            ALTER TABLE notes DROP COLUMN cluster_id;
            DROP TABLE clusters;
        `)
};

module.exports = {up,down,shorthands}