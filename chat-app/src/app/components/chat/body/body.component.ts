import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../services/user-info.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  dataDummy = [];

  constructor(private serviceInfo: UserInfoService) {
    this.dataDummy = this.serviceInfo.cargarContactos();
  }

  ngOnInit(): void {}
}
