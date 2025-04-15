import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnbarchartComponent } from './columnbarchart.component';

describe('ColumnbarchartComponent', () => {
  let component: ColumnbarchartComponent;
  let fixture: ComponentFixture<ColumnbarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnbarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
