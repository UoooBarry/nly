import { Schema, model } from 'mongoose';

interface IRecipe {
  _id: string;
  name: string;
  md_url: string;
  rating: number;
  category: Schema.Types.ObjectId
}

const schema = new Schema<IRecipe>({
  name: { type: String, required: true },
  md_url: { type: String },
  rating: { type: Number, default: 1 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
},
  {
    timestamps: true
  }
);

const RecipeModel = model<IRecipe>('Recipe', schema);

export default RecipeModel;
export {IRecipe};
