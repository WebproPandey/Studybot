const  mongoose =  require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: [true ,"Account already exists  with this email Account"],
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    avatar: {
      type: String,
      default: "",
    },

    preferredLanguage: {
      type: String,
      enum: ["hindi", "english"],
      default: "english",
    },

    subscriptionPlan: {
      type: String,
      enum: ["free", "pro", "premium"],
      default: "free",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
);

const userModel =  mongoose.model("User", userSchema);

module.exports = userModel
