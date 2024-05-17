import mongoose from "mongoose"
const dotenv = require('dotenv')

dotenv.config()


const connectToDB = async () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cdzkl7h.mongodb.net/`
    )
    .then(() => console.log("Connect to MongoDB"))
    .catch((err) =>
      console.log("Error connecting to MongoDB : " + err.message)
    );
};

export default connectToDB;
