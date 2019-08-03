
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})

export class Blog1Component implements OnInit {
form = new FormGroup({
    names: new FormArray([
      new FormControl(
        'Manisha'
      )]),
    topics : new FormArray([
    new FormControl(
      'Nice')]),
  });
 onClickSubmit(name:HTMLInputElement,topic : HTMLInputElement){
//console.log(topic.value);

  
if(topic.value != "" )
{
  (this.names as FormArray).insert(0,new FormControl(name.value));
  (this.topics as FormArray).insert(0,new FormControl(topic.value));

  topic.value ='';
  name.value='';
}

  }

  onClickRemove(name:FormControl,topic:FormControl){
    
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
  }
  constructor() {
    
   }

  ngOnInit() {
  }
  get names(){
    return this.form.get('names') as FormArray;
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
