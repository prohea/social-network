const { Schema, model, Types } = require('mongoose');
const moment = require("moment");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
			type: Date,
			default: () => new Date(),
			get: (timeStamp) => moment(timeStamp).format("DD/MM/YYYY hh:mm a"),
		},
    }
);

module.exports = reactionSchema;