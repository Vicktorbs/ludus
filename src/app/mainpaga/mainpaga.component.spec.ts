import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagaComponent } from './mainpaga.component';

describe('MainpagaComponent', () => {
  let component: MainpagaComponent;
  let fixture: ComponentFixture<MainpagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
