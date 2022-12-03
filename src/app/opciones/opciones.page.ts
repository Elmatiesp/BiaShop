import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  constructor(    
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.authService.logout()
    .then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }

}
