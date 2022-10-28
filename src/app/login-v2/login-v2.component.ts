import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss'],
})
export class LoginV2Component implements OnInit, OnDestroy {
  userName!: string;
  password!: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.userName = 'Type In Your User name';
    this.password = 'Type In Your password';
  }

  ngOnDestroy(): void {}

}
