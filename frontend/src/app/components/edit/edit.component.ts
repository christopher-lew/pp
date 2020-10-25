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

  isInPantry;
  truePantry(){
    this.isInPantry = true;
    console.log("True");
  }

  falsePantry(){
    this.isInPantry = false;
    console.log("False");
  }

  setPantry(isInPantry){
    if(isInPantry){
      this.truePantry();
      // Check True Button
    }else{
      this.isInPantry
    }
  }

  isTruePantry(){
    return this.isInPantry;
  }

  isFalsePantry(){
    return !this.isInPantry;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.ingredientService.getIngredientById(this.id).subscribe( res => {
        this.ingredient = res;
        this.updateForm.get('name').setValue(this.ingredient.name);
        this.setPantry(this.ingredient.isInPantry);
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

  updateIngredient(name, net, metric){
    console.log(this.isInPantry);
    var edited = true;
    this.ingredientService.updateIngredient(this.id, name, this.isInPantry, net, metric)
    .subscribe( () => {
      this.snackBar.open('Ingredient updated successfully', 'OK', {
        duration: 3000,
      })
    })
  }

}
