import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'elastic-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }

})
export class FormElementsComponent implements OnInit {

  showBasicFormSource: boolean;
  basicFormSource = escape(
`<md-input-container>
  <input mdInput placeholder="Company" type="text" required>
</md-input-container>

<div fxLayout.gt-sm="row" fxLayoutGap.gt-sm="16px">
  <md-input-container fxFlex>
    <input mdInput placeholder="First Name" type="text">
  </md-input-container>

  <md-input-container fxFlex>
    <input mdInput placeholder="Last Name" type="text" required>
  </md-input-container>
</div>

<md-input-container>
  <input mdInput placeholder="Password" type="password" required>
</md-input-container>

<md-input-container>
  <input mdInput #lengthHint maxlength="10" placeholder="Hint Label and Max Length" type="text" required>
  <md-hint align="start">Try to type in more than 10 letters</md-hint>
  <md-hint align="end">{{ lengthHint.value.length }}/10</md-hint>
</md-input-container>

<md-input-container>
  <input mdInput placeholder="Disabled" disabled>
</md-input-container>
`);

  showAdvancedFormSource: boolean;
  advancedFormSource = escape(
`<div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap.gt-sm="16px">
  <md-input-container color="primary" fxFlex.gt-sm>
    <input mdInput placeholder="Primary Color" type="text">
  </md-input-container>

  <md-input-container color="accent" fxFlex.gt-sm>
    <input mdInput placeholder="Accent Color" type="text">
  </md-input-container>

  <md-input-container color="warn" fxFlex.gt-sm>
    <input mdInput placeholder="Warn Color" type="text">
  </md-input-container>
</div>

<md-input-container>
  <input mdInput placeholder="Username" type="text" value="DavidSmith">
  <md-icon mdSuffix>person</md-icon>
</md-input-container>

<md-input-container fxFlex.gt-sm>
  <span mdPrefix>+1 &nbsp;</span>
  <input mdInput placeholder="Mobile Phone" type="text" required>
  <md-icon mdSuffix>smartphone</md-icon>
</md-input-container>

<md-input-container floatPlaceholder="never">
  <input mdInput placeholder="No Floating Placeholder" type="text" required>
</md-input-container>

<md-input-container>
  <input mdInput [mdDatepicker]="datepickerRef" placeholder="Click on the icon to the right for a Datepicker">
  <button mdSuffix [mdDatepickerToggle]="datepickerRef"></button>
</md-input-container>
<md-datepicker #datepickerRef></md-datepicker>
`);

  showFormThemingSource: boolean;
  formThemingSource = escape(
`<md-input-container color="primary">
  <input mdInput placeholder="Primary Color">
</md-input-container>

<md-input-container color="accent">
  <input mdInput placeholder="Accent Color">
</md-input-container>

<md-input-container color="warn">
  <input mdInput placeholder="Warn Color">
</md-input-container>
`);

  showFormPrefixSuffixSource: boolean;
  formPrefixSuffixSource = escape(
`<md-input-container>
  <span mdPrefix>+1 &nbsp;</span>
  <input mdInput placeholder="Input with prefix text">
</md-input-container>

<md-input-container>
  <input mdInput placeholder="Input with suffix icon">
  <md-icon mdSuffix>menu</md-icon>
</md-input-container>

<md-input-container>
  <span mdPrefix>http:// &nbsp;</span>
  <input mdInput placeholder="Input with prefix text and suffix icon">
  <md-icon mdSuffix>camera</md-icon>
</md-input-container>
`);

  showFormHintLabelSource: boolean;
  formHintLabelSource = escape(
`<md-input-container>
  <input mdInput placeholder="Email Address">
  <md-hint>e.g. david@example.com</md-hint>
</md-input-container>

<md-input-container floatPlaceholder="never">
  <input mdInput #hintLabelInputRef placeholder="Domain Name">
  <md-hint align="end">http://{{ hintLabelInputRef.value || "company" }}.example.com</md-hint>
</md-input-container>

<md-input-container floatPlaceholder="never">
  <input mdInput #hintLabelInputLengthRef maxlength="10" placeholder="Dynamic Hint Label">
  <md-hint align="start">Try to type in more than 10 letters</md-hint>
  <md-hint align="end">{{ hintLabelInputLengthRef.value.length }}/10</md-hint>
</md-input-container>
</div>
`);

  showFormCheckboxSource: boolean;
  formCheckboxSource = escape(
`<md-checkbox [checked]="false">Stay signed in</md-checkbox>
<md-checkbox [checked]="true" color="primary">Theming</md-checkbox>
<md-checkbox [checked]="false">Simply useful</md-checkbox>
<md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>
<md-checkbox [checked]="true" align="end">Align end</md-checkbox>
`);

  showFormCheckboxThemingSource: boolean;
  formCheckboxThemingSource = escape(
`<md-checkbox [checked]="true" color="primary">Primary Color</md-checkbox>
<md-checkbox [checked]="true" color="accent">Accent Color</md-checkbox>
<md-checkbox [checked]="true" color="warn">Warn Color</md-checkbox>
`);

  selectModel;
  showFormSelectSource: boolean;
  formSelectSource = escape(
`<md-select placeholder="Favorite fruit">
  <md-option value="Apples">Apples</md-option>
  <md-option value="Peaches">Peaches</md-option>
  <md-option value="Bananas">Bananas</md-option>
  <md-option value="Mango">Mango</md-option>
  <md-option value="Apples">Cucumber</md-option>
</md-select>
`);

  showFormDatepickerSource: boolean;
  formDatepickerSource = escape(
`<md-input-container>
  <input mdInput [mdDatepicker]="formDatepickerRef" placeholder="Select your date">
  <button mdSuffix [mdDatepickerToggle]="formDatepickerRef"></button>
  <md-hint>Click on the icon to the right for the Datepicker</md-hint>
</md-input-container>
<md-datepicker #formDatepickerRef></md-datepicker>
`);

  showFormSliderSource: boolean;
  formSliderSource = escape(
`<md-slider [min]="0" [max]="100" [step]="1" [thumb-label]="true" [tick-interval]="10" value="36"></md-slider>

<div fxLayout="row">
  <md-slider fxFlex [min]="0" [max]="10" [step]="1" value="6" color="primary"></md-slider>
  <md-slider fxFlex [min]="0" [max]="10" [step]="1" value="8" color="accent"></md-slider>
  <md-slider fxFlex [min]="0" [max]="10" [step]="1" value="7" color="warn"></md-slider>
</div>
`);

  showFormRadioSource: boolean;
  formRadioSource = escape(
`<md-radio-group fxLayout="row" fxLayoutGap="16px">
  <md-radio-button value="Apples" [checked]="true">Apples</md-radio-button>
  <md-radio-button value="Peaches">Peaches</md-radio-button>
</md-radio-group>
<md-radio-group fxLayout="row" fxLayoutGap="16px" color="accent">
  <md-radio-button value="primary" [checked]="true" color="primary">Primary Color</md-radio-button>
  <md-radio-button value="accent" color="accent">Accent Color</md-radio-button>
  <md-radio-button value="warn" color="warn">Warn Color</md-radio-button>
</md-radio-group>
`);

  showFormSlideToggleSource: boolean;
  formSlideToggleSource = escape(
`<div fxLayout="column" fxLayoutGap="8px">
  <md-slide-toggle [checked]="false">Slide Me</md-slide-toggle>
  <md-slide-toggle [checked]="false">Drag & Drop</md-slide-toggle>
  <md-slide-toggle [checked]="true">I Agree</md-slide-toggle>
</div>
<div fxLayout="column" fxLayoutAlign="start end" fxLayoutGap="8px">
  <md-slide-toggle [checked]="true" color="primary" labelPosition="before">Primary Color</md-slide-toggle>
  <md-slide-toggle [checked]="true" color="accent" labelPosition="before">Accent Color</md-slide-toggle>
  <md-slide-toggle [checked]="true" color="warn" labelPosition="before">Warn Color</md-slide-toggle>
</div>
`);

  constructor() { }

  ngOnInit() {
  }
}
