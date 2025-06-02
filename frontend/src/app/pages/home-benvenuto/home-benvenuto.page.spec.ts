import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBenvenutoPage } from './home-benvenuto.page';

describe('HomeBenvenutoPage', () => {
  let component: HomeBenvenutoPage;
  let fixture: ComponentFixture<HomeBenvenutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBenvenutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
