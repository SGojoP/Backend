import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailOrPhone: { type: String, required: true, unique: true },
    states: { type: [String], required: true },
    subscribedAt: { type: Date, default: Date.now, expire:  3153600},
    count: { type: Number, default: 2 },
    paymentstatus: {type: Boolean, default: false},
});

export default mongoose.model("Subscriber", SubscriberSchema);