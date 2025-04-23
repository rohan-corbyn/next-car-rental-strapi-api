"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::errors",
    {
        name: "strapi::cors",
        config: {
            origin: ["http://localhost:3000"], // Your Next.js dev server
            credentials: true,
        },
    },
    "strapi::security",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
