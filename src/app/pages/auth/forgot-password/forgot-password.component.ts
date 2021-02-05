import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'elastic-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/']);
  }

}
