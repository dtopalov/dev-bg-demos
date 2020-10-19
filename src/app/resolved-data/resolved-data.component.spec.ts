import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedDataComponent } from './resolved-data.component';

describe('ResolvedDataComponent', () => {
  let component: ResolvedDataComponent;
  let fixture: ComponentFixture<ResolvedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
