import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'elastic-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/']);
  }

}
