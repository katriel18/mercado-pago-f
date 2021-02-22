import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/data/phones.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}

}
