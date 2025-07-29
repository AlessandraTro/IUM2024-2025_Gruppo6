import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaBenesserePage } from './area-benessere.page';

describe('AreaBenesserePage', () => {
  let component: AreaBenesserePage;
  let fixture: ComponentFixture<AreaBenesserePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBenesserePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
