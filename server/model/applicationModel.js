const { Schema, model } = require('mongoose');

const applicationSchema = Schema({
  application_type: {
    type: String,
  },
  status:{
    type: Boolean,
    required:true,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, { timestamps: true});

module.exports.userApplication = model('application', applicationSchema);
