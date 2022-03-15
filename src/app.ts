import express from "express";
import todoRoutes from "./routes/todos";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
