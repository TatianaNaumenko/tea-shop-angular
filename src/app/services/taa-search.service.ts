import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaaSearchService {
  searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();
  constructor(private http: HttpClient) { }

  setSearch(query: string) {
    this.searchSubject.next(query);

  }
  getTeas(query: string): Observable<any> {
    return this.http.get(`https://testologia.ru/tea?search=${query}`);
  }

}
