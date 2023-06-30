const { Schema, model } = require('mongoose');

const userDocumentSchema = Schema({
  documentOne: {
    type: String,
  },
  documentTwo: {
    type: String,    
  },
  otherDocument: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, { timestamps: true});

module.exports.userDocument = model('userDocument', userDocumentSchema);
