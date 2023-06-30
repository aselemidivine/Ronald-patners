const { Schema, model } = require('mongoose');

const userPicSchema = Schema({
  image_url: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, { timestamps: true});

module.exports.userPicture = model('application', userPicSchema);
