import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScenariosPage } from './scenarios.page';

describe('ScenariosPage', () => {
  let component: ScenariosPage;
  let fixture: ComponentFixture<ScenariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
