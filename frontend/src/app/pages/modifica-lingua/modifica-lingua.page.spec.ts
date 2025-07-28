import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaLinguaPage } from './modifica-lingua.page';

describe('ModificaLinguaPage', () => {
  let component: ModificaLinguaPage;
  let fixture: ComponentFixture<ModificaLinguaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaLinguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
