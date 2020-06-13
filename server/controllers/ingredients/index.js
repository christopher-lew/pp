const Ingredient = require('../../models/ingredients');

var createIngredient = function(req,res) {
    let ingredient = new Ingredient(req.body);
    ingredient.save((err, ingredient) => {
        if(err){res.send(500,err);}
        res.json(200,ingredient);
    })
};

var getIngredients = function(req,res){
    Ingredient.find(function(err,ingredients){
        if(err){res.send(500,err);}
        res.json(200,ingredients);
    })
};

var getIngredient = function(req,res){
    Ingredient.findById(req.params.id, function(err,ingredient){
        if(err){res.send(500,err);}
        if(ingredient){res.json(200,ingredient);}
    });
};

module.exports = {
    createIngredient,
    getIngredient,
    getIngredients
};
