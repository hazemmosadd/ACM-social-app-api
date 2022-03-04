const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: { type: String },
    done: { type: Boolean, default: false, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
