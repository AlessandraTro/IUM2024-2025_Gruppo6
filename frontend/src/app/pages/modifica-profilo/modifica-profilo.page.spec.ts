import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaProfiloPage } from './modifica-profilo.page';

describe('ModificaProfiloPage', () => {
  let component: ModificaProfiloPage;
  let fixture: ComponentFixture<ModificaProfiloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
