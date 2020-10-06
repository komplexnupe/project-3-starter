const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'Password should be four characters or longer'
    ]
  },
    orders: [
      {
      order_id: {
        type: Number
      }
    }
  ],
  cart: {
    _id:{},
   status:{},
   quantity: {},
   total: {},

   products: []

  },
  shippingAddress: [ 
    {  
        name: {
        type: String,
        trim: true,
        required: true  
        }  ,
     street:   {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        trim: true,
        required: true
    },
    zipCode: {
        type: String,
        trim: true,
        required: true
    }
  }
  ]
})

class newUser {
  constructor({ id, email, password }) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;
