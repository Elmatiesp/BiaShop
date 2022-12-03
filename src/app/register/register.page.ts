import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formReg: FormGroup;

  constructor(
    private authService: AuthService,
    private router:Router) { 

      this.formReg = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
    }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.formReg.value)
    .then(response =>{
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

  Volver(){
    this.router.navigate(['/login']);
  }

}
