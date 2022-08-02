import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './user';
import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl!: string;
  baseUrl: string = "http://localhost/PROJECTPOS/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  public producr(id:any){
    return this.httpClient.get<any>(this.baseUrl+'/product.php',{id})
    .pipe(map(Products =>{
      this.setProduct(Products);
      return Products;
    }))
  }
  // public userlogin(username, password) {
  //   alert(username)
  //   return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  //     .pipe(map(Users => {
  //       this.setToken(Users[0].name);
  //       this.getLoggedInName.emit(true);
  //       return Users;
  //     }));
  // }

  // public userregistration(name, email, pwd) {
  //   return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
  //     .pipe(map(Users => {
  //       return Users;
  //     }));
  // }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  setProduct(products:any){
    localStorage.setItem('products', products);
  }

}
