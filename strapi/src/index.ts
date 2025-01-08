export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        origin: "*", // Adjust the origin as needed
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("A user connected");

      // Handle custom events
      socket.on("custom-event", (data) => {
        console.log("Received custom-event with data:", data);
        // Emit events or handle logic as needed
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });

    // Make the io instance available globally
    strapi.io = io;
  },
};
