import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuovaPasswordPage } from './nuova-password.page';

describe('NuovaPasswordPage', () => {
  let component: NuovaPasswordPage;
  let fixture: ComponentFixture<NuovaPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
