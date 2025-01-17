const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   first_name: { type: String },
   last_name: { type: String },
   email: { type: String, required: true },
   password: { type: String, required: true }
});

module.exports = User = mongoose.model('user', UserSchema);