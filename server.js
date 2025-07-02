import app from "./app.js";
import connectDB from "./config/connectDB.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connection is listing on port : ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
