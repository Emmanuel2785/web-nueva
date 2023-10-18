import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  const db = await connect("mongodb://127.0.0.1/web_dpe");
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected yea!!!!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
