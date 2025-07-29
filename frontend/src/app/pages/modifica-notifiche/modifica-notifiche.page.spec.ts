import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaNotifichePage } from './modifica-notifiche.page';

describe('ModificaNotifichePage', () => {
  let component: ModificaNotifichePage;
  let fixture: ComponentFixture<ModificaNotifichePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaNotifichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
