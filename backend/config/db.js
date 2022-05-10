import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //to connect mondb db we use MONGO_URI
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //To stop showing warning on console
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
    //will exit with failure
    process.exit(1);
  }
};

export default connectDB;
