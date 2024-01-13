import mongoose from 'mongoose';
import { drinkConstraints } from '../configs/constraints';

const drinkSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    container: {
      type: String,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
      min: drinkConstraints.volume.min,
      max: drinkConstraints.volume.max,
    },
    time: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;
