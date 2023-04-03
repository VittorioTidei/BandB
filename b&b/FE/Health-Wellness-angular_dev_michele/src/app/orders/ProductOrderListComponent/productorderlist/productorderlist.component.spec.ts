import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorderlistComponent } from './productorderlist.component';

describe('ProductorderlistComponent', () => {
  let component: ProductorderlistComponent;
  let fixture: ComponentFixture<ProductorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
