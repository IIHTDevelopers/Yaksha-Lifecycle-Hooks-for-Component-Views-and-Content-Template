import { Component, AfterViewInit, AfterContentInit, AfterViewChecked, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements AfterViewInit, AfterContentInit, AfterViewChecked {

  formFields: string[] = [];
  dynamicMessage = '';

  // To store the dynamic label entered by the user
  userLabel: string = '';

  // Using ViewChild to access the first input field and its label
  firstInput!: ElementRef;
  firstLabel!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked() {
  }

  addNewField() {
  }
}
