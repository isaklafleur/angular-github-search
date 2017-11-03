import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubResultsComponent } from './github-results.component';

describe('GithubResultsComponent', () => {
  let component: GithubResultsComponent;
  let fixture: ComponentFixture<GithubResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
