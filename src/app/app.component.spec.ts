import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component'; // Import your dynamic form component
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, DynamicFormComponent],  // Declare the DynamicFormComponent as it is used in AppComponent
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(component).toBeTruthy();
        });

        it('should have the correct title', () => {
            expect(component.title).toBe('Lifecycle Hooks - Dynamic Form');
        });

        it('should call ngOnInit and log initialization message', () => {
            jest.spyOn(console, 'log');  // Spy on console.log
            component.ngOnInit();
            expect(console.log).toHaveBeenCalledWith('AppComponent initialized');
        });
    });
});
