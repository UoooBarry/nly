import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Category {
  name: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Category>({
  name: { type: String, required: true },
});

// 3. Create a Model.
const CategoryModel = model<Category>('Category', schema);

export default CategoryModel;
