// getting-started.js
import mongoose from 'mongoose';

main().catch();

async function main() {
  await mongoose.connect('mongodb://localhost:27017/nly');
}
