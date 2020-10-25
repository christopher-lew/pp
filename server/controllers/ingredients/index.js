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

var updateIngredient = function(req,res){
    console.log("Trying to update");
    Ingredient.findById(req.params.id, function(err,ingredient){
        console.log("Trying to update");
        if(err){res.send(500,err);}
        if(err){res.send(404,err);}
        if(req.body.name){ ingredient.name = req.body.name; }
        ingredient.isInPantry = req.body.isInPantry; 
        // Will need to develop this function
        if(req.body.net){ingredient.net = req.body.net; }
        if(req.body.metric){ingredient.metric = req.body.metric; }
        
        ingredient.editedDate = Date.now();
        ingredient.save(function(err, ingredient){
            if(err){res.send(500,err);}
            res.json(200,ingredient);
        })
    });
}
/*
var bulkDeleteIngredient = function(idList){
    forEach(idList).deleteIngredient();
}
*/
var deleteIngredient = function(req,res){
    Ingredient.findByIdAndRemove(req.params.id, function(err,ingredient){
        if(err){res.send(500,err);}
        if(ingredient){
            console.log("Ingredient \"" + ingredient.name +"\" has been deleted.")
            res.json(200,'deleted: true');
        }
    })
}

module.exports = {
    createIngredient,
    getIngredient,
    getIngredients,
    updateIngredient,
    deleteIngredient
};
