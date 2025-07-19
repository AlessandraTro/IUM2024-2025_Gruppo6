import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoundEscapePage } from './sound-escape.page';

describe('SoundEscapePage', () => {
  let component: SoundEscapePage;
  let fixture: ComponentFixture<SoundEscapePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundEscapePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
