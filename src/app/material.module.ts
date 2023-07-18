import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonToggleModule,
    MatListModule
  ]
})
export class MaterialModule { }
