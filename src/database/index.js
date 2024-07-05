import mongoose from "mongoose";

const connectToDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connect to MongoDB"))
    .catch((err) =>
      console.log("Error connecting to MongoDB : " + err.message)
    );
};

export default connectToDB;
