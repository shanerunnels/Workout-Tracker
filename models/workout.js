const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        workouts: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter exercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter exercise time in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

exerciseSchema.virtual("totalDuration").get(function() {
    return this.workouts.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout; 