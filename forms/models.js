'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const VersionSchema = mongoose.Schema({
    questions: [{ type: String }],
    date: { type: Date, default: new Date() }
});

const FormSchema = mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    created: { type: Date, default: new Date() },
    projectUrl: { type: String, required: true },
    overview: { type: String, required: true },
    pendingRequests: { type: Number, default: 0 },
    versions: [VersionSchema]
});

const Form = mongoose.model('Form', FormSchema);
module.exports = { Form };