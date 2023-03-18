const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:
        {
            type: String,
            required: true,
            maxlength: 280,
        },
        username:
        {
            type: String,
            required: true,
        },
        createdAt:
        {
            type: Date,
            default: Date.now(),
            // need to do the getter function to format the date properly 
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;