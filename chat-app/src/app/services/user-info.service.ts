import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { messageInterface } from '../models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  dummy = [ 
    {
      color: 'rgba(22, 160, 133, 1)',
      name: 'Juan Perez Andrade',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(39, 174, 96, 1)',
      name: 'Andres Alvarado',
      msg:
        'Nulla eu incididunt sunt quisNulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt t sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum. eiusmod proidlum.Nulla eu incididunt sunt quiseiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(211, 98, 59, 1)',
      name: 'Monica Mejia A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(238, 82, 83, 1)',
      name: 'Dania Perez M.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(113, 88, 226, 1)',
      name: 'Matias Licen A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(22, 160, 133, 1)',
      name: 'Juan Perez Andrade',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(39, 174, 96, 1)',
      name: 'Andres Alvarado',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(211, 98, 59, 1)',
      name: 'Monica Mejia A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(238, 82, 83, 1)',
      name: 'Dania Perez M.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(113, 88, 226, 1)',
      name: 'Matias Licen A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(22, 160, 133, 1)',
      name: 'Juan Perez Andrade',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(39, 174, 96, 1)',
      name: 'Andres Alvarado',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(211, 98, 59, 1)',
      name: 'Monica Mejia A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(238, 82, 83, 1)',
      name: 'Dania Perez M.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
    {
      color: 'rgba(113, 88, 226, 1)',
      name: 'Matias Licen A.',
      msg: 'Nulla eu incididunt sunt quis eiusmod proidlum.',
    },
  ];
  //--------------------se almacenara la informacion al redireccionar al usuario
  infoUser:messageInterface;
  ultimosMensajes:messageInterface[]=[];

  constructor(private http: HttpClient) {
    console.log('servicio listo para usar');
  }

  userInfoGen(dni: string):Observable<any> {
    const url = `https://apiperu.dev/api/dni/${dni}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer f7823fb69a01f00bafe8fa7c9a154bff8a6095e6824ab43d54e3d17f1aa74afe',
    });
    return this.http.get(url,{headers})
  }

  cargarContactos() {
    return this.dummy;
  } 
}
