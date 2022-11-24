const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			max_length: 280,
			min_length: 1,
		},
		createdAt: {
			type: Date,
			default: () => new Date(),
			get: (timeStamp) => moment(timeStamp).format("DD/MM/YYYY hh:mm a"),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;