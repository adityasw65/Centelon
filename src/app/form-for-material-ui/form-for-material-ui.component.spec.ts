import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForMaterialUIComponent } from './form-for-material-ui.component';

describe('FormForMaterialUIComponent', () => {
  let component: FormForMaterialUIComponent;
  let fixture: ComponentFixture<FormForMaterialUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormForMaterialUIComponent]
    });
    fixture = TestBed.createComponent(FormForMaterialUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
