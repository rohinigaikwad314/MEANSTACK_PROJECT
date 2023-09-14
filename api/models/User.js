import {mongoose, Schema} from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
      default:"https://pngtree.com/freepng/lord-shiva-illustration-and-har-mahadev-hindi-calligrahy_8466708.html"
    },
    //how to add security
    isAdmin: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'Role',
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('users', UserSchema);
