import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressiPage } from './progressi.page';

describe('ProgressiPage', () => {
  let component: ProgressiPage;
  let fixture: ComponentFixture<ProgressiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
