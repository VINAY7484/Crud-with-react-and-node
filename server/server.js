import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/userRoute.js";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.all("*", (req, res) => res.send("that route does not exist "));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  console.log(`http://localhost:${port}`);
});
