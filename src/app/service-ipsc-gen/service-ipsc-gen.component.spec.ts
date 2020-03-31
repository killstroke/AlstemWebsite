import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIpscGenComponent } from './service-ipsc-gen.component';

describe('ServiceIpscGenComponent', () => {
  let component: ServiceIpscGenComponent;
  let fixture: ComponentFixture<ServiceIpscGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIpscGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIpscGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
