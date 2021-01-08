import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private baseURL: any = environment.baseURL;

  constructor(private http: HttpClient) { }

  public fetchCandidates(): Observable<any> {
    return this.http.get(this.baseURL+ 'candidates');
  }
}