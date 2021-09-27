import Category from '../models/category';

const seed = () => {
  Category.find({}).then(categories => {
    if (categories.length > 0) return;
    Category.create({
      name: 'Daily',
    });
  })
}

export default seed;
