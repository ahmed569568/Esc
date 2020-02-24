import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CareersRoutingModule } from './Careers-routing.module';
import { CareersComponent } from './Careers.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CareersRoutingModule],
  declarations: [CareersComponent]
})
export class CareersModule {}
