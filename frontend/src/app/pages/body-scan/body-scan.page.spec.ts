import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyScanPage } from './body-scan.page';

describe('BodyScanPage', () => {
  let component: BodyScanPage;
  let fixture: ComponentFixture<BodyScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
