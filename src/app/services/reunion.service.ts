import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './general/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  REUNION_PATH = '/reunion';
  REUNION_PATH_PAGE = '/pagination';
  REUNION_STATUS_PATH = '/statuses';
  FIND_BY_NAME = '/find';
  constructor(private apiService: ApiService,
              private http: HttpClient) { }
              getAll(): Observable<any> {
                return this.apiService.getAll(this.REUNION_PATH).pipe(map(
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
                return this.apiService.delete(this.REUNION_PATH + '/' + id).pipe(map(
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