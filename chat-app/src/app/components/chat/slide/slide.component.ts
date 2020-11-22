import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { messageInterface } from "../../../models";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  @Input() infoUser: any = {};

  dataDummy = [];
  messages:messageInterface[];

  constructor(private serviceInfo: UserInfoService) {
    this.dataDummy = this.serviceInfo.cargarContactos();
  }

  ngOnInit(): void {
    console.log(this.infoUser);
    /* this.messages.push(JSON.parse(sessionStorage.getItem('usuario'))) */
    console.log(this.messages);
  }
}
