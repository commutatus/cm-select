import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSelectComponent } from './cm-select.component';

describe('CmSelectComponent', () => {
  let component: CmSelectComponent;
  let fixture: ComponentFixture<CmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
