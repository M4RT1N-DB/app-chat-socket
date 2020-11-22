import { Component, OnInit, Input } from '@angular/core';
import { messageInterface } from 'src/app/models';
import { SocketService } from 'src/app/services/socket-service.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  //----------------se almacenan la informacion enviada desde el home.
  infoUsuario:messageInterface[] = [];
   
  /*LA API DEVUELVE ESTE FORMATO
  data:{ 
  apellido_materno: "HUAYHUARIMA"
apellido_paterno: "BOZA"
codigo_verificacion: 5
fecha_nacimiento: "1970-06-02"
nombre_completo: "BOZA HUAYHUARIMA, SEGUNDINA"
nombres: "SEGUNDINA"
numero: "09448586"
origen: 0
sexo: null }
success:{status:true}
  */

  messagesUsers;

  constructor(public serviceInfo: UserInfoService,private socketUser: SocketService ) {
    
  }

  ngOnInit(): void {
    this.almacenarEnMemoria();
    this.infoUsuario.push(this.socketUser.users);
   console.log(this.infoUsuario);
    /* this.socketUser.messagesUsers()
    console.log(this.socketUser.messagesGeneral); */
  }

  almacenarEnMemoria(){
    sessionStorage.setItem('usuario',JSON.stringify(this.infoUsuario));
  }
//--------------------optional method
  limpiarMemoria(){
    sessionStorage.clear();
  }

  
}
