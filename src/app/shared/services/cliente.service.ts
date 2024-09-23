import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiurl = `${environment.api}/clientes/`;

  constructor(private http: HttpClient) { }


  post(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.apiurl, cliente);
  }
}
