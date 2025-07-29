import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespiraPage } from './respira.page';

describe('RespiraPage', () => {
  let component: RespiraPage;
  let fixture: ComponentFixture<RespiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
