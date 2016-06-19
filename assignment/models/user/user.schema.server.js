module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phone: [String],
        facebook: {
            id:    String,
            token: String,
            displayName: String
        },
        websites:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Website' }],
        dateCreate: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "assignment.user"});

    return UserSchema
};