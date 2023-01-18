import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    });
  }

  submitHandler() {
    console.log(this.signupForm.value);
  }
}
