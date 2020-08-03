import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  ingredient: any = {};
  updateForm: FormGroup;

  constructor(private ingredientService: IngredientService, private fb: FormBuilder, private router: Router, 
    private route:ActivatedRoute, private snackBar: MatSnackBar) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.ingredientService.getIngredientById(this.id).subscribe( res => {
        this.ingredient = res;
        this.updateForm.get('name').setValue(this.ingredient.name);
        this.updateForm.get('isInPantry').setValue(this.ingredient.isInPantry);
        this.updateForm.get('net').setValue(this.ingredient.net);
        this.updateForm.get('metric').setValue(this.ingredient.metric);
      })
    })
  }

  createForm(){
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      isInPantry: '',
      net: '',
      metric: '',
    })
  }

  updateIngredient(name, isInPantry, net, metric){
    if(isInPantry = "True")
      isInPantry= true;
    else
      isInPantry = false;
    this.ingredientService.updateIngredient(this.id, name, isInPantry, net, metric)
    .subscribe( () => {
      this.snackBar.open('Ingredient updated successfully', 'OK', {
        duration: 3000,
      })
    })
  }

}
