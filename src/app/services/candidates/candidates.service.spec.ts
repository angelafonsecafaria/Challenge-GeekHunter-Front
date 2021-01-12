import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CandidatesService } from './candidates.service';

describe('CandidatesService', () => {
    let service: CandidatesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CandidatesService]
        });
        service = TestBed.inject(CandidatesService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should return an Observable<Array<CandidatesDetails>>', () => {
        const mockCandidates = [
            {
                id: 1,
                city: 'valid_city',
                experience: 'valid_experience',
                technologies: [
                    {
                        name: 'valid_name',
                        is_main_tech: true
                    }
                ]
            }
        ];

        service.fetchCandidates().subscribe(candidates => {
            expect(candidates).toEqual(mockCandidates);
        });

        const req = httpMock.expectOne('http://localhost:3000/candidates');
        expect(req.request.method).toBe("GET");
        req.flush(mockCandidates);
    });
});