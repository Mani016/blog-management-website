
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})

export class Blog1Component implements OnInit {
form = new FormGroup({
    
    topics : new FormArray([
    new FormControl(
      '')]),
  });
 onClickSubmit(topic : HTMLInputElement){
//console.log(topic.value);

  
if(topic.value != "" )
{

  (this.topics as FormArray).insert(0,new FormControl(topic.value));

  topic.value ='';
 
}

  }

  onClickRemove(topic:FormControl){
     
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
  }
  constructor() {
    
   }

  ngOnInit() {
  }
 
  get topics(){
    return this.form.get('topics') as FormArray;
  }
  
}
