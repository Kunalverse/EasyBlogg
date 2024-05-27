import mongoose from "mongoose"
const dotenv = require('dotenv')

dotenv.config()


const connectToDB = async () => {
  const mongoURI = process.env.MONGODB_URI

  console.log("================================");
  console.log("mongoURI: " + mongoURI);

  if (!mongoURI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
  }

  mongoose
    .connect(
      mongoURI
    )
    .then(() => console.log("Connect to MongoDB"))
    .catch((err) =>
      console.log("Error connecting to MongoDB : " + err.message)
    );
};

export default connectToDB;
