import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';



@Component({
  selector: 'metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges  {

@Input() title: string;
@Input() description: string;
@Input('used') value: number = 0;
@Input('available') max: number = 100;
// private _value: number = 0;
// private _max: number = 100;

// @Input('used')
// set value(value: number) {
//   if(!isNaN(value)) value = 0;
//   this._value = value;
// }
// get value(): number {
//   return this._value;
// }

// @Input('available')
// set max(max: number) {
//   if(!isNaN(max)) max = 100;
//   this._max = max;
// }
// get max(): number {
//   return this._max;
// }

//Hook in change detection lifecycle
ngOnChanges(changes){
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  //
  //if only the value input was changed in the parent, then only the change.value property will be set on the lifecycle hook.

  if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
  if (changes.max && isNaN(changes.max.currentValue)) this.max = 0;
}

//Check utilization if exceeds 70%
isDanger(){
  return this.value / this.max > 0.7;
}
}
