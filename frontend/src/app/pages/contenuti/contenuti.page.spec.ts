import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenutiPage } from './contenuti.page';

describe('ContenutiPage', () => {
  let component: ContenutiPage;
  let fixture: ComponentFixture<ContenutiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenutiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
