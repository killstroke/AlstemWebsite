import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTempComponent } from './prod-temp.component';

describe('ProdTempComponent', () => {
  let component: ProdTempComponent;
  let fixture: ComponentFixture<ProdTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
