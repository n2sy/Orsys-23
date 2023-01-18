import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent {
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      addemail: new FormControl(null, [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  submitHandler() {
    console.log(this.signupForm.value);
  }

  get formSkills() {
    return <FormArray>this.signupForm.get('skills');
  }

  addSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.formSkills.push(newCtrl);
  }
}
