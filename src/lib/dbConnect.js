import { MongoClient } from "mongodb";

if (!import.meta.env.ATLAS_URI) {
  throw new Erro("Invalid: ATLAS_URI");
}

const uri = import.meta.env.ATLAS_URI;
const dbName = import.meta.env.DB_NAME;
const options = {};
let cachedMongo;

const connectToAtlas = async () => {
  const mongo = await new MongoClient(uri, options).connect();
  return mongo.db(`${dbName}`);
};

export const getDb = async () => {
  if (import.meta.env.NODE_ENV === "development") {
    if (!global._mongoConnection) {
      global._mongoConnection = await connectToAtlas();
      cachedMongo = global._mongoConnection;
    }
    return cachedMongo;
  }
  const mongo = await connectToAtlas();
  return mongo;
};

export const Posts = async () => {
  const db = await getDb();
  console.log("Connected to database...");
  return db.collection("post");
};
