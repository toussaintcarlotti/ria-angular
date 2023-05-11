import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import axios from "../../../api/axios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    if (authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }

  onSubmitForm() {
    this.login();

  }

  login() {
    axios.get('sanctum/csrf-cookie');
    axios.post('api/login', this.form.value)
      .then((res) => {
        console.log(res.data);
        this.authenticateUser(res.data);

        console.log('redirecting to home page...')
        this.router.navigate(['/']);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  authenticateUser(data: any) {
    console.log(data);
    localStorage.setItem('authenticated', String(true));
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}
