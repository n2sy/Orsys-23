import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLang = 'python';
  myComment = 'RAS....';

  submitHandler(f) {
    console.log(f.value);
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'orsys-2023',
      langage: '',
      comment: '',
      gestion: '',
    });
  }
  generatePwdII(f: NgForm) {
    f.form.patchValue({
      password: 'orsys-2023',
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
