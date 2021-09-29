import { Schema, model } from 'mongoose';

interface ILetter {
  _id: string;
  content: string;
  author: string;
}

const schema = new Schema<ILetter>({
  content: { type: String, required: true },
  author: { type: String, required: true }
},
  {
    timestamps: true
  }
);

const LetterModel = model<ILetter>('Letter', schema);

export default LetterModel;
export {ILetter};
