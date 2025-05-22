const {Schema,model} =require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: function () {
          return !this.isGoogleUser; // Only required if not a Google user
        },
      },
      isGoogleUser: {
        type: Boolean,
        default: false,
      },
    role:{
        type:String,
        default:"user"
    },
    favourites: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Book'
        }
      ]
    

    });

    module.exports=model("User",userSchema,"users")