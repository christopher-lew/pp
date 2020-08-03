export interface Ingredient {
    name: String,
    isInPantry: Boolean,
    net: String,
    metric: String,
    editedDate:{
        type:
            Date,
            default: Date},
    createdDate: {
        type:
            Date,
            default: Date},
}

// Name, isInPantry, net, metric, Last Edited, Created