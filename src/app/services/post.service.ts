import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService  {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get(`https://api.devall.com.br/devall-api/api/v1/post`);
  }

  public getPostsBusca(palavraChave: String): Observable<any> {
    return this.http.get(`https://api.devall.com.br/devall-api/api/v1/post?search=`+ palavraChave);
  }


}
