import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule
  ],
  exports:[NotfoundComponent]
})
export class SharedModule { }
