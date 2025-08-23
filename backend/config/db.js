import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Sumitrai111:root1234@cluster0.niwl4yi.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected..!!");
    });
};
