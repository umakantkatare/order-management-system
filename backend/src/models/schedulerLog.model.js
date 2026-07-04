import mongoose from "mongoose";

const schedulerLogSchema = new mongoose.Schema(
  {
    startedAt: {
      type: Date,
      required: true,
    },

    endedAt: {
      type: Date,
      required: true,
    },

    totalOrdersChecked: {
      type: Number,
      default: 0,
    },

    totalOrdersUpdated: {
      type: Number,
      default: 0,
    },

    executionStatus: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
      required: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SchedulerLog = mongoose.model("SchedulerLog", schedulerLogSchema);

export default SchedulerLog;
