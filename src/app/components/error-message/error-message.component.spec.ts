import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it ('show error message', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it ('show error message2', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.setErrors({anyError: true});
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it ('not show error message', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  });
  it('hide error message', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = "anotherError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })
});
