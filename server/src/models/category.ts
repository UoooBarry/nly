import { Schema, model } from 'mongoose';
import Recipe from './recipe';

interface ICategory {
  _id: string;
  name: string;
  recipes: typeof Recipe[];
}

const schema = new Schema<ICategory>({
  name: { type: String, required: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
});

const CategoryModel = model<ICategory>('Category', schema);

export default CategoryModel;
export { ICategory };
