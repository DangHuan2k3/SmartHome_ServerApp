const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema({
    numDevices: { type: String, required: false },
    numConnected: { type: String, maxLength: 255 },
    name: { type: String, required: true, default: '(unnamed)' },
    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'device' }],
}, {
    timestamps: true,
    statics: {
        async getRoom(_idRoom) {
            return await this.findById(_idRoom)
                .populate({ path: 'devices' });
        },
        async getAllRoom() {
            return await this.find({});
        },
    }
});

module.exports = mongoose.model('room', Room);