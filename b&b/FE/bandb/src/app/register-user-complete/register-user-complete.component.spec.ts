import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterUserCompleteComponent } from './register-user-complete.component';

describe('RegisterUserCompleteComponent', () => {
  let component: RegisterUserCompleteComponent;
  let fixture: ComponentFixture<RegisterUserCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
