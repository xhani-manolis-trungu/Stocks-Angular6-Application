import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcdashboardComponent } from './dcdashboard.component';

describe('DcdashboardComponent', () => {
  let component: DcdashboardComponent;
  let fixture: ComponentFixture<DcdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
