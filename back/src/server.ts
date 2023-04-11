import app from "./app";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
dotenv.config();

const port = process.env.PORT || 8000;

const databaseConnect = async () => {
  try {
    // try to connect to db
    await prisma.$connect();
    console.log("Database connected");
  } catch (error) {
    throw new Error(error as string);
  }
};

const initServer = async () => {
  try {
    await databaseConnect();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

initServer();
