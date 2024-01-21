import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../models/Clase';
import { Observable } from 'rxjs';
import { ClaseModel } from '../models/ClaseModel';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(private httpClient: HttpClient) { }

  URL_BASE = 'https://rujctknkvdrsvoulnvjm.supabase.co/rest/v1/'
  supabaseHeaders = new HttpHeaders().set("apiKey",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1amN0a25rdmRyc3ZvdWxudmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NzA4OTEsImV4cCI6MjAyMTA0Njg5MX0.9WmVq8Mzz8xoZPC3RvX70whclZVsvd9tpk78pInDSvY')
  //alumno puede obtener clase -GET
  crearClase(clase: ClaseModel): Observable<ClaseModel> {
   
    return this.httpClient.post<ClaseModel>(this.URL_BASE+'CLASE',clase,{headers: this.supabaseHeaders});
  }
  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<Clase[]> {
    // Realiza una solicitud HTTP (GET) para obtener clases por su código de asignatura
    const url = `${this.URL_BASE}/CLASE?cod_asignatura=${codAsignatura}`;

    return this.httpClient.get<Clase[]>(url);
  }
  obtenerCodigoClase(cod_clase: string): Observable<Clase[]> {
    const url = `${this.URL_BASE}/CLASE?cod_clase=${cod_clase}`;

    return this.httpClient.get<Clase[]>(url);
  }
  
}