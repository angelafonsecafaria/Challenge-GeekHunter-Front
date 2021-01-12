import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesDetails } from 'src/app/shared/models/candidates';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  public fetchCandidates(): Observable<Array<CandidatesDetails>> {
    return this.http.get<Array<CandidatesDetails>>(this.baseURL + 'candidates');
  }
}