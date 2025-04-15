import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../../_models/urls';

@Injectable({
  providedIn: 'root'
})
export class UseraccessService {

  constructor(private httpclient : HttpClient) { }

  accessToken = localStorage.getItem('ACCESS_TOKEN');

  headers_object = new HttpHeaders()
    .set('Authorization', "Bearer " + this.accessToken)

  
}
