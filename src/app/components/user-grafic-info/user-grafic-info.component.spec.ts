import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGraficInfoComponent } from './user-grafic-info.component';

describe('UserGraficInfoComponent', () => {
  let component: UserGraficInfoComponent;
  let fixture: ComponentFixture<UserGraficInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGraficInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGraficInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
