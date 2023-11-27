import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  // Add more fields if necessary
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  // Define more schema fields as needed
});

export default mongoose.model<User>('User', UserSchema);
