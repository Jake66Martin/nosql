const { Schema } = require("mongoose");

const reactionSchema = new Schema ({

    reactionId: {
        type: Schema.Types.ObjectId,
        ref: Schema.Types.ObjectId
    },
    reactionBody: {
        type: String, 
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual("formattedCreationDate").get(function () {
    const formattedDate = this.createdAt.toLocaleString();
    return formattedDate;
  });

  module.exports = reactionSchema;