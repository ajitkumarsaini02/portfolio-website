import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes("<username>")) {
    console.warn("⚠️  [DB] MONGODB_URI not configured in .env. Running in memory-only mode.");
    return false;
  }

  if (isConnected) return true;

  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`✅ [DB] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error("❌ [DB] Connection error:", error.message);
    return false;
  }
};

const getDbStatus = () => isConnected;

export { connectDB, getDbStatus };
export default connectDB;
