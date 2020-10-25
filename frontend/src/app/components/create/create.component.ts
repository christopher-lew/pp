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
      isInPantry: this.isInPantry,
      net: '',
      metric:'',
      editedDate: Date.now,
      createdDate: Date.now,
    })
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

  addIngredient(name, net, metric){
    console.log("Test 1");
    console.log();
    //console.log(isInPantry);
    console.log(this.isInPantry);
    //if(this.isInPantry == "True")
   
    this.ingredientService.createIngredient(name, this.isInPantry, net, metric).subscribe(()=>{
      // Function call. So after this above function is ran, it'll redirect you back to the list page.
      this.router.navigate(['/list']);
    })
  }

  ngOnInit(): void {
  }

}
//Name, isInPantry, net, metric, Last Edited, Created