import router from "@/routes/index.routes";
import express, { json } from "express";

const app = express();

app.use(json());
app.use(router);

app.listen(5000, () => {
  console.log("Server is up and running")
})