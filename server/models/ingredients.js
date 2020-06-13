var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
    name: String,
    isInPantry: Boolean,
    net: String,
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


/*

User Story
> Go to webpage


Component
    - Pantry
        - Input items you have
        - Returns all Items you have
            - Ingredients
                - name
                - id
                - isInPantry
                - net
                    - (net) - (req) >=0 ? Valid : Invalid (Call for more ingredients)
                    - net>=0 Alert

    - Search -> Recipe API
        - Returns
            - Name
            - Ingredients
                - name
                - isInPantry = inPantry(ingredient.name)? true: false
                - required
            - Procedures
                - Option 1: Link to Recipe URL
                - Option 2: Save Steps as a list

        - Those Ingredients will be matched with Pantry
            - Cross-examines to find matches
            - Strike-throughs ingredients that have 
            - Highlights ingredeints not have.
        - 
*/