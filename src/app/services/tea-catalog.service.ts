import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeaCard } from '../types/tea-card.type';

@Injectable({
  providedIn: 'root'
})
export class TeaCatalogService {
  private apiUrl = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) { }

  getTeaCatalog(): Observable<TeaCard[]> {

    return this.http.get<TeaCard[]>(this.apiUrl);
  }
  getTeaDetails(id: number): Observable<TeaCard> {
    return this.http.get<TeaCard>(`${this.apiUrl}?id=${id}`);
  }
  createOrder(data: {
    name: string,
    last_name: string,
    phone: string,
    country: string,
    zip: string,
    product: string,
    address: string,
    comment: string
  }) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data);
  }
}
