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
            ALTER TABLE clusters ADD COLUMN parent_cluster_id BIGINT REFERENCES clusters(cluster_id);
        `)
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
const down = (pgm) => {
    pgm.sql(`
            ALTER TABLE clusters DROP COLUMN parent_cluster_id;
        `)
};

module.exports = {up,down,shorthands};