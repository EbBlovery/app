import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModule:FormGroup;

  constructor() {
    let db = new FormBuilder();
    this.formModule = db.group({
       title:['',ValidityState.minlength(3)],
       price: [null,this.positiveNumberValidate],
       category: ['']
    })
  }

  ngOnInit() {
  }

  positiveNumberValidate(control: FormControl){
    if(!control.value){
      return null
    }
    let price = parseInt(control.value);
    if(price > 0){
      return null
    }else{
      return {positiveNumber:true}
    }
  }

}
