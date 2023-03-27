
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';



  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {

    if (this.email == '') {
      alert('Please enter email');
      console.log("srk");
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';

  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }
  signInWithFacebook() {
    this.auth.googleSignIn();
  }
  signInWithApple() {
    this.auth.googleSignIn();
  }

}