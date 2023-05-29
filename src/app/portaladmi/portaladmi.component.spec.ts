import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaladmiComponent } from './portaladmi.component';

describe('PortaladmiComponent', () => {
  let component: PortaladmiComponent;
  let fixture: ComponentFixture<PortaladmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaladmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortaladmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
