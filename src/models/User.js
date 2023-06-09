const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_CYCLES = 5;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    match:/^[A-Za-z0-9]+$/,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    validate:{ function (value) {
      return /^[A-Za-z0-9]+$/.test(value);
    },
    message:`Inavalid password charcters!`,
    },
    minLength:8,
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  console.log(value);
  console.log(this.password);
  console.log(this.repassword);
  if (value !== this.password) {
    throw new mongoose.MongooseError(`Password missmatch!`);
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, SALT_CYCLES);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
