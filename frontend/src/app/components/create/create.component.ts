import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private ingredientService: IngredientService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      isInPantry: '',
      net: '',
      metric:'',
      editedDate: Date.now,
      createdDate: Date.now,
    })
  }

  addIngredient(name, isInPantry, net, metric){
    if(isInPantry = "True")
      isInPantry= true;
    else
      isInPantry = false;
    this.ingredientService.createIngredient(name, isInPantry, net, metric).subscribe(()=>{
      // Function call. So after this above function is ran, it'll redirect you back to the list page.
      this.router.navigate(['/list']);
    })
  }

  ngOnInit(): void {
  }

}
//Name, isInPantry, net, metric, Last Edited, Created