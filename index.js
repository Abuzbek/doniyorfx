import express from "express";
import path from "path";
import AdminJS, { ComponentLoader } from "adminjs";
import mongoose from "mongoose";
import * as AdminJSMongoose from "@adminjs/mongoose";
import "dotenv/config";
import { expressAuthenticatedRouter } from "./authenticateRouter.js";
import { __dirname, add, componentLoader } from "./componentLoader.js";
import { UserResource } from "./resources/users.resource.js";
import { PaymentResource } from "./resources/payment.resource.js";
import paymentRouter from "./routers/payment.router.js";
import cors from "cors";
AdminJS.registerAdapter({
  Database: AdminJSMongoose.Database,
  Resource: AdminJSMongoose.Resource,
});

const app = express();
// Very basic configuration of AdminJS.
const dashboardHandler = async () => {
  // Asynchronous code where you, e. g. fetch data from your database

  return { message: "Hello World" };
};

const adminJs = new AdminJS({
  resources: [UserResource, PaymentResource],
  componentLoader,
  dashboard: {
    component: add("components/dashboard.jsx", "Dashboard"),
    handler: dashboardHandler,
  },
  rootPath: "/admin",
});
app.use(cors({ origin: "*" }));
app.use(adminJs.options.rootPath, expressAuthenticatedRouter(adminJs));
app.use("/api", paymentRouter);
app.use(express.static(path.join(__dirname, "public")));
// Run the server.
const run = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  app.listen(8080, () => console.log(`Example app listening on port 8080!`));
};
run();
