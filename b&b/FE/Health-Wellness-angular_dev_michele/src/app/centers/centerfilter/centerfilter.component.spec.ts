import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterfilterComponent } from './centerfilter.component';

describe('CenterfilterComponent', () => {
  let component: CenterfilterComponent;
  let fixture: ComponentFixture<CenterfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
