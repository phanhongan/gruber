var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Driver = mongoose.model('Driver', {
    name: String,
    state: String,
    location: Schema.Types.Mixed
});
