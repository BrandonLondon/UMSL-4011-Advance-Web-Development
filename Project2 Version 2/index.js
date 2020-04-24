const express = require("express");
const usersRouter = require("./routes/Mongo/userRoutes");
const postsRouter = require("./routes/Mongo/postRoutes");
const logger = require("./lib/middleware/logger");
const bodyparser = require("body-parser");

const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./lib/middleware/swagger");

app.use(bodyparser.json());
app.use(logger);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));