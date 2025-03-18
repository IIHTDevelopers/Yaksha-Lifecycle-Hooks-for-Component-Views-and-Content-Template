import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormComponent } from './dynamic-form.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize the form with default fields', () => {
      expect(component.formFields.length).toBe(3);
      expect(component.formFields).toEqual(['Name', 'Email', 'Message']);
    });

    it('should update the userLabel when the user enters a label for the first field', () => {
      const firstInputElement = fixture.debugElement.query(By.css('#firstInput')).nativeElement;
      firstInputElement.value = 'Custom Label';
      firstInputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.userLabel).toBe('Custom Label');
    });

    it('should add a new field with the user-defined label when "Add New Field" is clicked', () => {
      component.userLabel = 'Custom Label';
      const addButton = fixture.debugElement.query(By.css('button')).nativeElement;
      addButton.click();
      fixture.detectChanges();
      expect(component.formFields.length).toBe(4);
      expect(component.formFields[3]).toBe('Custom Label');
    });

    it('should add a new field with default label if no user label is provided', () => {
      component.userLabel = '';
      const addButton = fixture.debugElement.query(By.css('button')).nativeElement;
      addButton.click();
      fixture.detectChanges();
      expect(component.formFields.length).toBe(4);
      expect(component.formFields[3]).toBe('New Field 4');
    });
  });
});
