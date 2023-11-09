import MongoStore from "connect-mongo";
import AdminJSExpress from "@adminjs/express";
import { Users } from "./models/users.model";

export const expressAuthenticatedRouter = (adminJs) => {
  const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: "session",
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1,
  });

  return AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      cookieName: "adminjs",
      cookiePassword: "complicatedsecurepassword",
      authenticate: async (email, password) => {
        const user = await Users.findOne({ email });
        if (user) {
          const matched = user.encryptedPassword === password;
          if (matched) {
            return user;
          }
        }
        return false;
      },
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  );
};
