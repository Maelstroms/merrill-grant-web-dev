module.exports = function() {
    var mongoose = require("mongoose");

    var PageSchema = mongoose.Schema({
        websiteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Website' },
        name: String,
        title: String,
        description: String,
        widgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Widget' }],
        dateCreate: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "assignment.page"});

    return PageSchema
};