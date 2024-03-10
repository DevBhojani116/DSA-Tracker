import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        },
        category_state:
        {
            type: [Float32Array]
        }

    }
);

export const  userModel = mongoose.model("User Schema", userSchema);