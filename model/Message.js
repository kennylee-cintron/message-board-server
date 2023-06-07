import { Schema, model } from "mongoose";

//what will our data look like?
const messageSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  title: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  text: { type: String, required: true },
});

//model, will be used to maker queries to the database.
//model is created based on the schema
const Message = model("message", messageSchema);

export default Message;
