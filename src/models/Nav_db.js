import { Schema, model, models } from "mongoose";

const menuSchema = new Schema(
  {
    label: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    link: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    categoria: {
      type: String,
      required: false,
      unique: false,
      trim: false,
    },
    categoria2: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    categoria3: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Nav_db || model("Nav_db", menuSchema);
