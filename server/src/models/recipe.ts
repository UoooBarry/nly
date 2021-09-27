import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Recipe {
  name: string;
  md_url: string;
  rating: number;
  timestamps: Date;
  category: Schema.Types.ObjectId
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Recipe>({
  name: { type: String, required: true },
  md_url: { type: String },
  rating: { type: Number, default: 1 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// 3. Create a Model.
const RecipeModel = model<Recipe>('Recipe', schema);

export default RecipeModel;
