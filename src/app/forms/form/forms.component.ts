import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
   graduateForm: FormGroup;
  constructor(private _fb: FormBuilder) { }
   degrees = [
   { id:1, value: 'Deg 1'},
   { id:2, value: 'Deg 2'},
   { id:3, value: 'Deg 3'}
   ];
   ngOnInit() {
     this.graduateForm = this._fb.group({
       postgraduate: this._fb.array([this.addGraduateGroup()])
     });
  }

  addGraduateGroup() {
    return this._fb.group({
      university: [],
      degree: [],
      specialization: [],
      place: [],
      time: [],
      sample: []
    })
  }

  addGraduate(){
    this.graduateArray.push(this.addGraduateGroup());
  }

  get graduateArray(){
    return this.graduateForm.get('postgraduate') as FormArray;
  }

}
