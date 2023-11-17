import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;