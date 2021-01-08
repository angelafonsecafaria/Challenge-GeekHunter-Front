import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CandidatesService } from 'src/app/services/candidates/candidates.service';
import { CandidatesDetails } from 'src/app/shared/interfaces/candidates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public candidates: Array<CandidatesDetails>
  private unsubscribeAll: Subject<any>;

  constructor(private candidatesService: CandidatesService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.fetchCandidates();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  fetchCandidates(): void {
    this.candidatesService.fetchCandidates()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((candidates: Array<CandidatesDetails>) => {
        this.candidates = candidates;
      });
  }
}
