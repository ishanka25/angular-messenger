var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
   content: {type: String, required: true},
   user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message._id);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);