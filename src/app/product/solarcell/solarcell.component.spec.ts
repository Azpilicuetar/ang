import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarcellComponent } from './solarcell.component';

describe('SolarcellComponent', () => {
  let component: SolarcellComponent;
  let fixture: ComponentFixture<SolarcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
