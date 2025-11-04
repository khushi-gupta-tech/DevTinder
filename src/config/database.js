const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kg834208_db_user:6NZYEtmIOR631acg@devtindercluster.tcqqzyp.mongodb.net/devTinder"
  );
};

module.exports = {connectDB};
 