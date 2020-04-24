import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './general/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({ 
  providedIn: 'root'
})
export class EmployeService {
  EMPLOYE_PATH = '/employe';
  EMPLOYE_PATH_PAGE = '/pagination';
  EMPLOYE_STATUS_PATH = '/statuses';
  FIND_BY_NAME = '/find';
  constructor(private apiService: ApiService,
              private http: HttpClient) { }
              getAll(): Observable<any> {
                return this.apiService.getAll(this.EMPLOYE_PATH).pipe(map(
                  res => {
                    if (res) {
                      return res;
                    } else { 
                      return {};
                    }
                  }
                ));
              }
              post(employe): Observable<any> {
                return this.apiService.post(this.EMPLOYE_PATH, employe).pipe(map(
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
                return this.apiService.getById(this.EMPLOYE_PATH + '/' + id).pipe(map(
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
                return this.apiService.delete(this.EMPLOYE_PATH + '/' + id).pipe(map(
                  res => {
                    if (res) {
                      return res;
                    } else {
                      return {};
                    }
                  }
                ));
              }
              put(id,employe): Observable<any> {
                return this.apiService.put(this.EMPLOYE_PATH + '/' + id, employe).pipe(map(
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