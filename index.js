import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRouter from "./routes/Admin.js";
//

import paymentRoutes from "./routes/payment.js";

//
import pemRoutes from "./routes/worker.js";
import customerRoutes from "./routes/customer.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
// Morgan part--
import morgan from "morgan";

// swagger part -- 
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.js"

// Payment Imports
import dotenv from "dotenv";
dotenv.config();

// creating app
const app = express();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);



app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Backend setup");
});

//Routes

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.json());
app.use("/pem", pemRoutes);
app.use("/customer", customerRoutes);

app.use("/admin", adminRouter);
app.use("/payment", paymentRoutes);

//
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


const CONNECTION_URL =
"mongodb+srv://worker:lXMcCnzLWjHrLWaL@vchat.i3f2sus.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

// connecting mongoDB to server
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT} *=*`))
  )
  .catch((error) => console.log(error.message));
