import Message from "../model/Message.js";

export const postMessage = async (req, res) => {
  try {
    const message = {
      title: req.body.title,
      name: req.body.name,
      text: req.body.text,
      password: req.body.password,
    };
    const newMessage = await Message.create(message);
    console.log("posted");
    res.status(200).json(newMessage);
  } catch (error) {
    return error;
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const foundMessage = await Message.find();
    res.status(200).json(foundMessage);
  } catch (error) {
    return error;
  }
};

export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMessage = await Message.findById(id);
    res.status(200).json(foundMessage);
  } catch (error) {
    return error;
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const iDelete = await Message.findByIdAndDelete(id);
    res.status(200).json(iDelete);
  } catch (error) {
    return error;
  }
};
