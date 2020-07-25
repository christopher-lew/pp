// Recipe Schema

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
    name: String,
    isInPantry: Boolean,
    net: Number,
    metric: String,
    editedDate:{
        type:
            Date,
            default: Date.now},
    createdDate: {
        type:
            Date,
            default: Date.now},

});

module.exports = mongoose.model('Ingredient', IngredientSchema);
