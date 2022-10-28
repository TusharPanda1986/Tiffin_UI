import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal],
})
export class LoginV2Component implements OnInit, OnDestroy {
  userName!: string;
  password!: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.userName = 'Type In Your User name';
    this.password = 'Type In Your password';
  }

  ngOnDestroy(): void {
  }

}
