import { Schema, model, models } from "mongoose";

const BookSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  information: {
    type: String,
  },
  tags: {
    type: String,
  },
});

const Book = models.Book || model("Book", BookSchema);

export default Book;
