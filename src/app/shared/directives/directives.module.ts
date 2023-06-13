import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { DragDropDirective } from './drag-drop.directive';
import { TranformSelectDirective } from './transform-input.directive';
import { MonetaryDirective } from './monetary.directive';


@NgModule({
  declarations: [
    OnlyNumbersDirective,
    DragDropDirective,
    TranformSelectDirective,
    MonetaryDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    OnlyNumbersDirective,
    DragDropDirective,
    TranformSelectDirective,
    MonetaryDirective
  ],
})
export class DirectivesModule { }
