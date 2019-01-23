import { ArchiveComponent } from './archive/archive.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ArchiveComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports:[ArchiveComponent]
})
export class BlogModule { }
