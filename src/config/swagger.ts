import swaggerJsdoc from "swagger-jsdoc"

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Todo Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Github",
          url: "https://github.com/ashsajal1",
          email: "ashsajal@yahoo.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["../index.ts"],
  };

  const specs = swaggerJsdoc(options);

  export default specs;