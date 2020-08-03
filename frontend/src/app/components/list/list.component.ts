import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../../ingredient.model';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ingredients: Ingredient[];
  displayedColumns = ['Name', 'isInPantry', 'net', 'metric', 'Last Edited', 'Created', 'actions'];

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit List');
    this.fetchIngredients();
  }

  fetchIngredients(){
    console.log("Fetching Ingredients...");
    this.ingredientService
    .getIngredients()
    .subscribe( (data: Ingredient[]) => {
      console.log("Pulling data...");
      this.ingredients = data;
      console.log("Requesting Data...");
      console.log(this.ingredients);
    })
  }

  editIngredient(id){
    console.log(`Editing ${id}`);
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIngredient(id){
    console.log(`Deleting ${id}`);
    this.ingredientService.deleteIngredient(id).subscribe(()=>{
      this.fetchIngredients();
    })
  }
}
