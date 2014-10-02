var Backbone = require("backbone");
var _ = require("underscore");

var Song = Backbone.Model.extend({
    idAttribute: "_id",

    parse: function(resp, options) {
        return resp.doc;
    }
});


module.exports = Song;
