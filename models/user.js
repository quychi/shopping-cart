var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Email: { type: String, require: true },
    Pass: { type: String, require: true }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;