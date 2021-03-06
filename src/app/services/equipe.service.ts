import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './general/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  EQUIPE_PATH = '/equipe';
  EQUIPE_PATH_PAGE = '/pagination';
  EQUIPE_STATUS_PATH = '/statuses';
  FIND_BY_NAME = '/find';
  constructor(private apiService: ApiService,
              private http: HttpClient) { }
              getAll(): Observable<any> {
                return this.apiService.getAll(this.EQUIPE_PATH).pipe(map(
                  res => {
                    if (res) {
                      return res;
                    } else { 
                      return {};
                    }
                  }
                ));
              }
              getById(id: number): Observable<any> {
                return this.apiService.getById(this.EQUIPE_PATH + '/' + id).pipe(map(
                  res => {
                    if (res) {
                      return res;
                    } else {
                      return {};
                    }
                  }
                ));
              }
              delete(id): Observable<any> {
                return this.apiService.delete(this.EQUIPE_PATH + '/' + id).pipe(map(
                  res => {
                    if (res) {
                      return res;
                    } else {
                      return {};
                    }
                  }
                ));
              }
}