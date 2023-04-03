import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterviewComponent } from './centerview.component';

describe('CenterviewComponent', () => {
  let component: CenterviewComponent;
  let fixture: ComponentFixture<CenterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
