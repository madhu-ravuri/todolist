const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Task input required."],
    minlength: [1],
    maxlength: [25],
  },
});
{
  timestamps: true;
}
module.exports.List = mongoose.model("List", ListSchema);
