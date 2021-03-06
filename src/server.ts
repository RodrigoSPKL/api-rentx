import express from "express";
import swaggerUi from "swagger-ui-express";

import { categoriesRoutes } from "./routes/categories.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running!"));
