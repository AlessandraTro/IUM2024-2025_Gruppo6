import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderImpostazioniPage } from './header-impostazioni.page';

describe('HeaderImpostazioniPage', () => {
  let component: HeaderImpostazioniPage;
  let fixture: ComponentFixture<HeaderImpostazioniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImpostazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
