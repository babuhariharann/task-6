import mongoose from "mongoose";

const connection = async (URL) => {
  try {
    await mongoose.connect(`${URL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connected mongodb database");
  } catch (error) {
    console.log("Error while connecting mongodb server", err);
  }
};

export default connection;
