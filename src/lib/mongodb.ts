import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
    throw new Error("Please define the MONGODB_DB_NAME environment variable inside .env.local");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    try {
        const client = new MongoClient(uri || "");
        await client.connect();
        const db = client.db(dbName);

        cachedClient = client;
        cachedDb = db;

        return { client, db };
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
} 