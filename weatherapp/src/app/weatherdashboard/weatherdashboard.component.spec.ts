import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdashboardComponent } from './weatherdashboard.component';

describe('WeatherdashboardComponent', () => {
  let component: WeatherdashboardComponent;
  let fixture: ComponentFixture<WeatherdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
