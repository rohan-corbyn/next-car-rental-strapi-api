// apps/strapi-api/config/database.js
module.exports = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", "your-neon-db-name.neon.tech"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "your-db-name"),
            user: env("DATABASE_USERNAME", "your-db-user"),
            password: env("DATABASE_PASSWORD", "your-db-password"),
            ssl: {
                rejectUnauthorized: false, // Required by Neon
            },
        },
    },
});
