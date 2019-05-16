import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  form: FormGroup = new FormGroup({
  	university: new FormControl(''),
  	specialization: new FormControl(''),
  	place: new FormControl(''),
    time: new FormControl(''),
    sample: new FormControl(''),
  	degree: new FormControl(0),
    });
}
