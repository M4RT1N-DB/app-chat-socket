import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { io } from 'socket.io-client';

import { Observable } from 'rxjs';
import { messageInterface } from 'src/app/models';

const SERVER_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;
  users: messageInterface = {};
  messagesGeneral: messageInterface[] = [];
  constructor() {}

  public initSocket(): void {
    this.socket = io(SERVER_URL);
  }
  //-----------------------recibe mensaje
  public send(message: messageInterface) {
    this.messagesGeneral.push(message);
    this.socket.emit('message', message);
  }
  //-------------------------envia mensaje
  public onMessage(): Observable<messageInterface> {
    return new Observable<messageInterface>((observer) => {
      this.socket.on('message', (data: messageInterface) => {
        observer.next(data);
      });
    });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>((observer) => {
      this.socket.on(event, () => observer.next());
    });
  }
  public onUser(userId: string) {
    return this.socket.emit('newUser', userId);
  }

  almacenaraUsuarios(usuario:messageInterface){
    this.users=usuario
  }
  /* public messagesUsers(){
    return this.socket.on('messagesUsers',(message)=>{
      this.messagesGeneral=message;
    });
  } */
  /* public listenMessages(eventName:string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data)=>{
        subscriber.next(data)
      })
    })
  } */
}
