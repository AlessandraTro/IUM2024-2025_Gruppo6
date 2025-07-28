import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObiettiviPage } from './obiettivi.page';

describe('ObiettiviPage', () => {
  let component: ObiettiviPage;
  let fixture: ComponentFixture<ObiettiviPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObiettiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
