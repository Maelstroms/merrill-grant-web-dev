module.exports = function() {
    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: User,
        name: String,
        description: String,
        pages: [Page],
        dateCreate: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "assignment.website"});

    return WebsiteSchema
};