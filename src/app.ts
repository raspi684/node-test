import express from "express";
import logRequestMiddleware from "./middlewares/log-request.middleware";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware";
import requestIdMiddleware from "./middlewares/request-id.middleware";

const app = express();

app.use(requestIdMiddleware);
app.use(logRequestMiddleware);

app.get("/", (req, res) => {
  return res.send("Hello from express!");
});

app.use(errorHandlerMiddleware);

export default app;
