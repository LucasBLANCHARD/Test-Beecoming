import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVilleComponent } from './single-ville.component';

describe('SingleVilleComponent', () => {
  let component: SingleVilleComponent;
  let fixture: ComponentFixture<SingleVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
