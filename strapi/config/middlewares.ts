export default [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "http://frontend:3000"], // Разрешаем ваш клиентский сайт
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "x-api-key"], // Добавьте все заголовки, которые вам нужны
    },
  },
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "Powered by nx.md",
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
