import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeditazionePage } from './meditazione.page';

describe('MeditazionePage', () => {
  let component: MeditazionePage;
  let fixture: ComponentFixture<MeditazionePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
