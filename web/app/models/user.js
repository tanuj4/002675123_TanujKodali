const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10; // the number of salt rounds to use for hashing

const SampleSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// hash the password before saving it to the database
SampleSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, saltRounds);
  user.password = hash;
  next();
});

// compare the user input password with the hashed password in the database
SampleSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Sample", SampleSchema);