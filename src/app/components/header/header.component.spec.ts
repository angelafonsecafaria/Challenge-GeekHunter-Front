import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HeaderComponent
            ],
        }).compileComponents();
    });

    it('should create the header', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.componentInstance;
        expect(header).toBeTruthy();
    });
});
