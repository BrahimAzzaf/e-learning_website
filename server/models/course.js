const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: String,
    description: String,
    course: String,
    image: String, // Image URL
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    attachments: [String] // Array of file URLs
}, { timestamps: true }); // Add timestamps option

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
