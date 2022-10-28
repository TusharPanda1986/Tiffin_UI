import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  NgbModalConfig,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginV2Component } from '../login-v2/login-v2.component';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class HeaderComponent implements OnInit {
  title: string = '';
  closeResult = '';

  @ViewChild('content')
  content!: any;

  private modalRef: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  onButtonClick() {
    this.modalRef = this.modalService.open(LoginV2Component, { centered: true });
  }

  ngOnInit(): void {}
}
