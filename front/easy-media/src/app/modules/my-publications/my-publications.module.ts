import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPublicationsRoutingModule } from './my-publications-routing.module';
import { MyPublicationsComponent } from './containers/my-publications/my-publications.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MyPublicationsComponent],
  imports: [CommonModule, MyPublicationsRoutingModule, SharedModule],
})
export class MyPublicationsModule {}
