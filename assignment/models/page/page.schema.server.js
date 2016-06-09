module.exports = function() {
    var mongoose = require("mongoose");

    var PageSchema = mongoose.Schema({
        _website: Website,
        name: String,
        title: String,
        description: String,
        widgets: [Widget],
        dateCreate: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "assignment.website"});

    return PageSchema
};