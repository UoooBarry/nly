import { Schema, model } from 'mongoose';

interface Category {
  name: string;
}

const schema = new Schema<Category>({
  name: { type: String, required: true },
});

const CategoryModel = model<Category>('Category', schema);

export default CategoryModel;
