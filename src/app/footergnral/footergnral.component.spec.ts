import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergnralComponent } from './footergnral.component';

describe('FootergnralComponent', () => {
  let component: FootergnralComponent;
  let fixture: ComponentFixture<FootergnralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootergnralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootergnralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
