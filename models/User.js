import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "student",
    },
    bio: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    askedQuestions: {
      type: Array,
      default: [],
    },
    solvedProblems: {
      type: Array,
      default: [],
    },
    topics: {
      type: Array,
      default: [],
    },
    phone: {
      type: String,
      default: "",
    },
    collage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
