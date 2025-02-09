import mongoose, {Document, Schema} from 'mongoose'

export interface Query extends Document {
    name: string;
    email: string;
    message: string;
}

const querySchema = new Schema<Query>(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        message: {type: String, required: true}
    },
    {timestamps: true}
)

export default mongoose.models.Query || mongoose.model<Query>('Query', querySchema)