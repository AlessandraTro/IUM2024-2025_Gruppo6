import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoundPage } from './sound.page';

describe('SoundPage', () => {
  let component: SoundPage;
  let fixture: ComponentFixture<SoundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
