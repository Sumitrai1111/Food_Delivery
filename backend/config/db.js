import mongoose from "mongoose";

export const connectDb = async () => {
<<<<<<< HEAD
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB Connected..!!");
  });
=======
  await mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => {
      console.log("DB Connected..!!");
    });
>>>>>>> b15e55de3b9cf7c8e8d04b0a686577bb313296c6
};
