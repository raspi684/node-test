import app from "./app";

const appPort = Number(process.env.PORT ?? 3000) || 3000;

app.listen(appPort, () => {
  console.log(`App listen on port ${appPort}`);
});
