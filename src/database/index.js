import mongoose from "mongoose"
const dotenv = require('dotenv')

dotenv.config()


const connectToDB = async () => {
  const mongoURI = 'mongodb+srv://kunalbaghel995:RVyi7FJlr5SwHue1@cluster0.cdzkl7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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
