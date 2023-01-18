import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLang = 'python';
  myComment = 'RAS....';
  showError = false;
  constructor(private authService: AuthService, private router: Router) {}

  submitHandler(f) {
    console.log(f.value);
    this.authService.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('myToken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
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
