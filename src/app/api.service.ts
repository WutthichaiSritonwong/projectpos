import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Users } from './user';
import { Products } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl!: string;
  baseUrl: string = "http://localhost/projectpos/php";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  productsService(fromData: FormData): Observable<any> {
    const id = fromData.get('id');
    console.log(id);
    return this.httpClient.post(`http://localhost/projectpos/php/product.php`,{id:id}).pipe(
      map((res: any) => {
        return res
      })
    );

    // return this.httpClient.post<any>('http://localhost/projectpos/php/product.php',id)
    // .pipe(map(Products =>{
    //   this.setProduct(Products);
    //   return Products;
    // }));
  }

  public producs(id: any) {
    alert(id);

    return this.httpClient.post<Products>('http://localhost/projectpos/php/product.php', id)
      // return this.httpClient.post<any>(this.baseUrl+'/product.php',id)
      .pipe();
    // .pipe(map(Products =>{
    //   this.setProduct(Products);
    //   return Products;
    // }));
  }
  public userlogin(username: string, password: string) {
    // alert(username)
    console.log('username', username);
    console.log('password', password);

    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        // this.getLoggedInName.emit(true);
        return Users;
      }));
  }

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

  setProduct(products: any) {
    return localStorage.setItem('products', products);

    // localStorage.setItem('products', products);
  }

}
