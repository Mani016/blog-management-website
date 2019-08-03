
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})

export class Blog3Component implements OnInit {
isFavorite : boolean;

form = new FormGroup({
    names: new FormArray([
      new FormControl(
        'Manisha'
      ),

      ]),
    topics : new FormArray(
    [
    new FormControl(
      'Nice'),
  ]),
  
});
 




onClickSubmit(name:HTMLInputElement,topic : HTMLInputElement){
//console.log(topic.value);

  
if(topic.value != "" )
{
  (this.topics as FormArray).insert(0,new FormControl(topic.value));
  (this.names as FormArray).insert(0,new FormControl(name.value))
  topic.value ='';
  name.value='';
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
  get names(){
    return this.form.get('names') as FormArray;
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
